const imageSize = 64;
const canvasSize = 128;
const model = 'files/model.onnx';

var noise_deviation = 1.0;
var noise_mean = 0.0;
var session = null;
var generating = false;
var stop_requested = false;
var emojis = [];

function changeDeviation() {
    noise_deviation = Number.parseFloat(document.getElementById('deviation_input').value);
    document.getElementById('deviation_value').value = noise_deviation.toFixed(1);
}

function changeMean() {
    noise_mean = Number.parseFloat(document.getElementById('mean_input').value);
    document.getElementById('mean_value').value = noise_mean.toFixed(1);
}

function seededRandom(seed) {
    var state = seed >>> 0;
    return function() {
        state = (Math.imul(1664525, state) + 1013904223) >>> 0;
        return (state + 0.5) / 4294967296;
    };
}

// Box-Muller transform: https://stackoverflow.com/a/36481059
function randomNormal(mean, std, random) {
    const u = 1 - random();
    const v = 1 - random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * std + mean;
}

function randomNoise(size, seed) {
    const random = seededRandom(seed);
    let arr = [];
    for (var i = 0; i < size; ++i) {
        arr.push(randomNormal(noise_mean, noise_deviation, random));
    }
    return Float32Array.from(arr);
}

// Pixel buffers: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
function drawImage(context, data, imageSize, canvasSize) {
    const source = document.createElement('canvas');
    source.width = imageSize;
    source.height = imageSize;
    const source_context = source.getContext('2d');
    const pixels = source_context.createImageData(imageSize, imageSize);
    const channelSize = imageSize * imageSize;
    for (var i = 0; i < channelSize; ++i) {
        pixels.data[i * 4] = data[i] * 255;
        pixels.data[i * 4 + 1] = data[i + channelSize] * 255;
        pixels.data[i * 4 + 2] = data[i + channelSize * 2] * 255;
        pixels.data[i * 4 + 3] = 255;
    }
    source_context.putImageData(pixels, 0, 0);
    context.clearRect(0, 0, canvasSize, canvasSize);
    context.imageSmoothingEnabled = !document.getElementById('pixel_input').checked;
    context.filter = 'hue-rotate(' + document.getElementById('hue_input').value + 'deg) saturate(' + document.getElementById('saturation_input').value + '%) contrast(' + document.getElementById('contrast_input').value + '%)';
    context.drawImage(source, 0, 0, canvasSize, canvasSize);
    context.filter = 'none';
}

function updateFinish() {
    for (const name of ['hue', 'saturation', 'contrast']) {
        document.getElementById(name + '_value').value = document.getElementById(name + '_input').value + (name === 'hue' ? '°' : '%');
    }
    for (const emoji of emojis) {
        if (emoji.data) {
            drawImage(emoji.canvas.getContext('2d'), emoji.data, imageSize, canvasSize);
        }
    }
}

function setStatus(message, detail) {
    document.getElementById('status').textContent = message;
    document.getElementById('status_detail').textContent = detail;
}

function updateCount() {
    document.getElementById('count_label').textContent = emojis.filter(function(emoji) { return emoji.data; }).length + ' CREATED';
}

function setBusy(busy) {
    generating = busy;
    document.getElementById('generation_controls').disabled = busy;
    document.getElementById('generate_button').disabled = busy;
    document.getElementById('generate_button').textContent = busy ? 'Creating your emojis…' : 'Generate emojis ↗';
    document.getElementById('stop_button').hidden = !busy;
    document.getElementById('stop_button').disabled = false;
    document.getElementById('canvases').setAttribute('aria-busy', String(busy));
    for (const emoji of emojis) {
        emoji.remix.disabled = busy || !emoji.data;
    }
}

function createCard(index, seed) {
    const card = document.createElement('article');
    card.className = 'emoji-card';
    card.innerHTML = '<div class="preview"><span class="placeholder" aria-hidden="true">✦</span><canvas width="128" height="128" hidden></canvas></div><div class="card-info"><span class="card-label"></span><div class="card-actions"><button type="button" disabled>Remix</button><button type="button" disabled>Save PNG</button></div></div>';
    const canvas = card.querySelector('canvas');
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Generated emoji ' + (index + 1));
    const buttons = card.querySelectorAll('button');
    const emoji = { card: card, canvas: canvas, seed: seed, data: null, remix: buttons[0], save: buttons[1] };
    card.querySelector('.card-label').textContent = 'No. ' + String(index + 1).padStart(2, '0') + ' · Ready to create';
    emoji.remix.addEventListener('click', function() { generate(emoji); });
    emoji.save.addEventListener('click', function() {
        const link = document.createElement('a');
        link.download = 'emojiable-' + emoji.seed + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
    document.getElementById('canvases').appendChild(card);
    return emoji;
}

// ONNX session reuse: https://onnxruntime.ai/docs/tutorials/web/
async function fillCanvas(session, emoji, seed) {
    const tensor = new ort.Tensor('float32', randomNoise(100, seed), [1, 100]);
    var results = null;
    try {
        results = await session.run({ input: tensor });
        emoji.data = Float32Array.from(results.output.data);
        emoji.seed = seed;
        drawImage(emoji.canvas.getContext('2d'), emoji.data, imageSize, canvasSize);
        emoji.canvas.hidden = false;
        emoji.card.querySelector('.placeholder').hidden = true;
        emoji.card.querySelector('.card-label').textContent = 'Seed ' + seed;
        emoji.save.disabled = false;
    } finally {
        tensor.dispose();
        for (const output of Object.values(results || {})) {
            output.dispose();
        }
    }
}

function randomSeed() {
    return crypto.getRandomValues(new Uint32Array(1))[0];
}

async function generate(selected) {
    if (generating) {
        return;
    }
    const seed_input = document.getElementById('seed_input');
    if (!seed_input.reportValidity() || seed_input.value === '') {
        setStatus('Choose a valid seed.', 'Use a whole number between 0 and 4294967295.');
        return;
    }
    stop_requested = false;
    setBusy(true);
    const progress = document.getElementById('progress');
    progress.hidden = false;
    progress.removeAttribute('value');
    var queue = [];
    var completed = 0;
    try {
        if (session === null) {
            setStatus('Loading model…', 'This is only needed for the first batch.');
            if (typeof ort === 'undefined') {
                throw new Error('The generator library could not load. Check your connection and reload the page.');
            }
            session = await ort.InferenceSession.create(model);
        }
        if (stop_requested) {
            return;
        }
        if (selected) {
            queue = [{ emoji: selected, seed: randomSeed() }];
        } else {
            const count = Number(document.getElementById('count_input').value);
            document.getElementById('canvases').replaceChildren();
            emojis = [];
            for (var i = 0; i < count; ++i) {
                const seed = (Number(seed_input.value) + i) >>> 0;
                const emoji = createCard(i, seed);
                emojis.push(emoji);
                queue.push({ emoji: emoji, seed: seed });
            }
        }
        progress.max = queue.length;
        progress.value = 0;
        for (const item of queue) {
            item.emoji.card.classList.add('pending');
        }
        updateCount();
        for (const item of queue) {
            if (stop_requested) {
                break;
            }
            setStatus('Creating emoji ' + (completed + 1) + ' of ' + queue.length + '…', 'You can adjust colors while generation runs.');
            await new Promise(function(resolve) { setTimeout(resolve, 20); });
            await fillCanvas(session, item.emoji, item.seed);
            item.emoji.card.classList.remove('pending');
            progress.value = ++completed;
            updateCount();
        }
        setStatus(stop_requested ? 'Generation stopped.' : 'Generation complete.', 'Save a PNG or remix an emoji.');
    } catch (error) {
        console.error(error);
        setStatus('We couldn’t finish this batch.', 'Your completed emojis are still available. Check your connection and try Generate again.');
    } finally {
        for (const emoji of emojis) {
            emoji.card.classList.remove('pending');
            if (!emoji.data) {
                emoji.card.querySelector('.card-label').textContent = 'Not generated';
            }
        }
        if (stop_requested && queue.length === 0) {
            setStatus('Generation stopped.', 'The generator is ready whenever you want to try again.');
        }
        progress.hidden = true;
        setBusy(false);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('deviation_input').addEventListener('input', changeDeviation);
    document.getElementById('mean_input').addEventListener('input', changeMean);
    document.getElementById('generate_button').addEventListener('click', function() { generate(); });
    document.getElementById('shuffle_button').addEventListener('click', function() { document.getElementById('seed_input').value = randomSeed(); });
    document.getElementById('stop_button').addEventListener('click', function() {
        stop_requested = true;
        this.disabled = true;
        setStatus('Stopping after the current operation…', 'Your completed emojis will stay available.');
    });
    for (const name of ['hue', 'saturation', 'contrast', 'pixel']) {
        document.getElementById(name + '_input').addEventListener('input', updateFinish);
    }
    document.getElementById('reset_button').addEventListener('click', function() {
        document.getElementById('hue_input').value = 0;
        document.getElementById('saturation_input').value = 100;
        document.getElementById('contrast_input').value = 100;
        document.getElementById('pixel_input').checked = false;
        updateFinish();
    });
    for (var i = 0; i < 14; ++i) {
        emojis.push(createCard(i, 42 + i));
    }
});
