const root = document.documentElement;
const header = document.querySelector(".site-header");
const progress = document.getElementById("scrollProgress");
const motionButton = document.getElementById("motionToggle");
const motionLabel = motionButton.querySelector(".motion-toggle__label");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("[data-section]")];
const reveals = [...document.querySelectorAll(".reveal")];
const projects = [...document.querySelectorAll(".project")];
const typewriter = document.querySelector("[data-typewriter]");
const typewriterLines = typewriter
    ? [...typewriter.querySelectorAll("[data-type-text]")]
    : [];
const typewriterValues = typewriterLines.map((line) => line.querySelector(".hero__type-value"));
const typewriterCursor = document.createElement("span");

typewriterCursor.className = "hero__type-cursor";
typewriterCursor.setAttribute("aria-hidden", "true");

let typewriterTimer;
let typewriterLineIndex = 0;
let typewriterCharacterIndex = 0;
let typewriterPrepared = false;
let typewriterComplete = false;

const systemPrefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const savedMotionPreference = localStorage.getItem("reduceMotion");

const portraitParticles = document.querySelector(".portrait-particles");
const heroProfile = document.querySelector(".hero__profile");
if (typewriter && heroProfile) {
    const headlineObserver = new ResizeObserver(([entry]) => {
        heroProfile.style.setProperty("--headline-center", `${entry.contentRect.height / 2}px`);
    });
    headlineObserver.observe(typewriter);
}

if (portraitParticles) {
    const particles = [];
    for (let index = 0; index < 9; index += 1) {
        const particle = document.createElement("span");
        const drift = (Math.random() - 0.5) * 12;
        const size = 20 + Math.random() * 12;
        const origin = -38 + (index % 3 + Math.random()) * 76 / 3;
        const sway = 3 + Math.random() * 5;
        particle.className = "portrait-particle";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particles.push({ particle, size, origin, drift, sway, index, animation: null });
        portraitParticles.append(particle);
    }

    new ResizeObserver(([entry]) => {
        const width = entry.contentRect.width;
        if (!width) return;
        const duration = 6.5;
        particles.forEach((item) => {
            const position = (time) => ({
                x: width * (item.origin + item.drift * time / duration) / 100
                    + Math.sin(time * Math.PI / 3 + item.index) * item.sway,
                y: -width * 0.107 * time,
                scale: 0.8 + 0.8 * time / duration
            });
            // Include both radii so fading begins only after the entire
            // particle clears the portrait's outer border, plus a 1px gap.
            let low = 0;
            let high = duration;
            for (let step = 0; step < 32; step += 1) {
                const time = (low + high) / 2;
                const point = position(time);
                if (Math.hypot(point.x, point.y) > width / 2 + item.size * point.scale / 2 + 1) {
                    high = time;
                } else {
                    low = time;
                }
            }
            const clearTime = high;
            const times = [...Array.from({ length: 131 }, (_, i) => i * duration / 130),
                clearTime, Math.min(duration, clearTime + 0.4)].sort((a, b) => a - b);
            const frames = times.map((time) => {
                const point = position(time);
                return {
                    offset: time / duration,
                    transform: `translate(-50%, -50%) translate(${point.x}px, ${point.y}px) scale(${point.scale})`,
                    opacity: time <= clearTime ? 1 : Math.max(0, 1 - (time - clearTime) / 0.4)
                };
            });
            const currentTime = item.animation?.currentTime ?? 0;
            item.animation?.cancel();
            item.animation = item.particle.animate(frames, {
                duration: duration * 1000,
                delay: -Math.floor(item.index / 3) * duration * 1000 / 3,
                iterations: Infinity,
                easing: "linear"
            });
            item.animation.currentTime = currentTime;
        });
    }).observe(portraitParticles);
}

const portraitButton = document.querySelector(".portrait-button");
let portraitBounce;
let lastPortraitBurst = -Infinity;
let portraitHintShown = false;
const burstLayer = document.createElement("div");
burstLayer.className = "burst-layer";
burstLayer.setAttribute("aria-hidden", "true");
document.body.append(burstLayer);
const floatingCircles = [];
const circlePointer = { x: 0, y: 0, active: false };
let circleFrame = 0;
let circleLastTime = 0;
window.addEventListener("pointermove", (event) => {
    circlePointer.x = event.clientX;
    circlePointer.y = event.clientY;
    circlePointer.active = event.pointerType !== "touch";
}, { passive: true });
document.addEventListener("pointerleave", () => { circlePointer.active = false; });
window.addEventListener("blur", () => { circlePointer.active = false; });

function circleOpacity(circle) {
    if (circle.age < 0.35) return 1 - 0.8 * circle.age / 0.35;
    return 0.2 * Math.pow(Math.max(0, 1 - (circle.age - 0.35) / (circle.lifetime - 0.35)), 0.7);
}

function popCircle(circle) {
    const index = floatingCircles.indexOf(circle);
    if (index < 0 || !circle.released) return;
    floatingCircles.splice(index, 1);
    circle.element.classList.remove("is-floating");
    const transform = circle.element.style.transform;
    const pop = circle.element.animate([
        { transform: `${transform} scale(1)`, opacity: circleOpacity(circle) },
        { transform: `${transform} scale(2.2)`, opacity: 0 }
    ], { duration: 220, easing: "ease-out", fill: "forwards" });
    pop.onfinish = pop.oncancel = () => circle.element.remove();

    for (let index = 0; index < 9; index += 1) {
        const fragment = document.createElement("span");
        fragment.className = "portrait-particle";
        const size = 4 + Math.random() * 5;
        const angle = (index + Math.random() * 0.5) * Math.PI * 2 / 9;
        const distance = circle.radius + 24 + Math.random() * 24;
        fragment.style.width = `${size}px`;
        fragment.style.height = `${size}px`;
        burstLayer.append(fragment);
        const scatter = fragment.animate([
            { transform: `translate(-50%, -50%) translate(${circle.x}px, ${circle.y}px) scale(1)`, opacity: 0.75 },
            { transform: `translate(-50%, -50%) translate(${circle.x + Math.cos(angle) * distance}px, ${circle.y + Math.sin(angle) * distance}px) scale(0.3)`, opacity: 0 }
        ], { duration: 300 + Math.random() * 120, easing: "ease-out", fill: "forwards" });
        scatter.onfinish = scatter.oncancel = () => fragment.remove();
    }
}

function animateFloatingCircles(now) {
    const dt = Math.min((now - circleLastTime) / 1000, 0.033);
    circleLastTime = now;
    const reduced = root.classList.contains("reduce-motion") || systemPrefersReducedMotion.matches;
    const portraitRect = portraitParticles.getBoundingClientRect();
    for (let index = floatingCircles.length - 1; index >= 0; index -= 1) {
        const circle = floatingCircles[index];
        if (reduced || circle.age >= circle.lifetime) {
            circle.element.remove();
            floatingCircles.splice(index, 1);
            continue;
        }
        if (!circle.released) {
            circle.distance += circle.speed * dt;
            circle.x = portraitRect.left + portraitRect.width / 2 + Math.cos(circle.angle) * circle.distance;
            circle.y = portraitRect.top + portraitRect.height / 2 + Math.sin(circle.angle) * circle.distance;
            if (circle.distance > portraitRect.width / 2 + circle.radius + 1) {
                circle.released = true;
                circle.element.classList.add("is-floating");
                burstLayer.append(circle.element);
            }
        } else {
            circle.age += dt;
            let mouseNearby = false;
            if (circlePointer.active) {
                const dx = circle.x - circlePointer.x;
                const dy = circle.y - circlePointer.y;
                const distance = Math.hypot(dx, dy);
                const reach = 80 + circle.radius;
                if (distance < reach) {
                    const angle = distance > 0.01 ? Math.atan2(dy, dx) : circle.angle;
                    mouseNearby = true;
                    circle.mouseVx = Math.cos(angle) * 40;
                    circle.mouseVy = Math.sin(angle) * 40;
                }
            }
            circle.vx += Math.sin(circle.age * 0.8 + circle.angle) * 6 * dt;
            circle.vy += Math.cos(circle.age * 0.6 + circle.angle) * 6 * dt;
            const drag = Math.exp(-0.18 * dt);
            circle.vx *= drag;
            circle.vy *= drag;
            const speed = Math.hypot(circle.vx, circle.vy);
            if (speed > 190) {
                circle.vx *= 190 / speed;
                circle.vy *= 190 / speed;
            }
            const mouseDrag = mouseNearby ? 1 : Math.exp(-1.8 * dt);
            circle.mouseVx *= mouseDrag;
            circle.mouseVy *= mouseDrag;
            const mouseSpeed = Math.hypot(circle.mouseVx, circle.mouseVy);
            if (mouseSpeed > 40) {
                circle.mouseVx *= 40 / mouseSpeed;
                circle.mouseVy *= 40 / mouseSpeed;
            }
            circle.x += (circle.vx + circle.mouseVx) * dt;
            circle.y += (circle.vy + circle.mouseVy) * dt;
            const maxX = Math.max(circle.radius, window.innerWidth - circle.radius);
            const maxY = Math.max(circle.radius, window.innerHeight - circle.radius);
            if (circle.x < circle.radius || circle.x > maxX) {
                circle.x = Math.max(circle.radius, Math.min(maxX, circle.x));
                circle.vx *= -0.85;
                circle.mouseVx *= -0.5;
            }
            if (circle.y < circle.radius || circle.y > maxY) {
                circle.y = Math.max(circle.radius, Math.min(maxY, circle.y));
                circle.vy *= -0.85;
                circle.mouseVy *= -0.5;
            }
        }
        const x = circle.released ? circle.x : circle.x - portraitRect.left - portraitRect.width / 2;
        const y = circle.released ? circle.y : circle.y - portraitRect.top - portraitRect.height / 2;
        circle.element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        circle.element.style.opacity = String(circleOpacity(circle));
    }
    circleFrame = floatingCircles.length ? requestAnimationFrame(animateFloatingCircles) : 0;
}

portraitButton?.addEventListener("click", () => {
    if (!portraitHintShown) {
        portraitHintShown = true;
        const hint = document.querySelector(".portrait-hint");
        if (hint) {
            hint.textContent = "try to pop the bubbles!";
            const reduced = root.classList.contains("reduce-motion") || systemPrefersReducedMotion.matches;
            const revealStart = reduced ? "inset(0)" : "inset(0 100% 0 0)";
            const hintAnimation = hint.animate([
                { opacity: 0, clipPath: revealStart, offset: 0 },
                { opacity: 1, clipPath: "inset(0)", offset: 0.09 },
                { opacity: 1, clipPath: "inset(0)", offset: 0.35 },
                { opacity: 0, clipPath: "inset(0)", offset: 1 }
            ], { duration: 8500, easing: "linear", fill: "forwards" });
            hintAnimation.onfinish = () => hint.remove();
        }
    }
    if (!portraitParticles || root.classList.contains("reduce-motion")
        || systemPrefersReducedMotion.matches) return;
    const now = performance.now();
    if (now - lastPortraitBurst < 250) return;
    lastPortraitBurst = now;

    floatingCircles.splice(0).forEach((circle) => {
        circle.element.classList.remove("is-floating");
        const fade = circle.element.animate([
            { opacity: circleOpacity(circle) },
            { opacity: 0 }
        ], { duration: 300, easing: "ease-out", fill: "forwards" });
        fade.onfinish = fade.oncancel = () => circle.element.remove();
    });

    const frame = portraitButton.closest(".portrait-frame");
    portraitBounce?.cancel();
    portraitBounce = frame.animate([
        { transform: "translate(0, 0) rotate(0) scale(1)", offset: 0 },
        { transform: "translate(0, 3px) rotate(-0.7deg) scale(0.985)", offset: 0.12 },
        { transform: "translate(-2px, -9px) rotate(1deg) scale(1.015)", offset: 0.3 },
        { transform: "translate(2px, -5px) rotate(-0.7deg) scale(1.008)", offset: 0.46 },
        { transform: "translate(-1px, 1px) rotate(0.3deg) scale(1)", offset: 0.64 },
        { transform: "translate(0, 0) rotate(0) scale(1)", offset: 1 }
    ], { duration: 950, easing: "ease-in-out" });

    const radius = frame.clientWidth / 2;
    for (let index = 0; index < 28; index += 1) {
        const particle = document.createElement("span");
        particle.className = "portrait-particle";
        const size = 18 + Math.random() * 14;
        const angle = (index + Math.random() * 0.7) * Math.PI * 2 / 28;
        const start = Math.max(0, radius - 42);
        const speed = 60 + Math.random() * 32.5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * start}px, ${Math.sin(angle) * start}px)`;
        portraitParticles.append(particle);
        const circle = {
            element: particle, radius: size / 2, angle, distance: start, speed,
            vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
            mouseVx: 0, mouseVy: 0,
            x: 0, y: 0, age: 0, lifetime: 0.35 + (21.65 + Math.random() * 8) / 2, released: false
        };
        particle.addEventListener("click", (event) => {
            event.stopPropagation();
            popCircle(circle);
        });
        floatingCircles.push(circle);
    }
    while (floatingCircles.length > 168) {
        floatingCircles.shift().element.remove();
    }
    if (!circleFrame) {
        circleLastTime = performance.now();
        circleFrame = requestAnimationFrame(animateFloatingCircles);
    }
});

function completeTypewriter() {
    if (!typewriter) return;

    window.clearTimeout(typewriterTimer);
    typewriterLines.forEach((line, index) => {
        typewriterValues[index].textContent = line.dataset.typeText;
    });
    typewriterCursor.remove();
    typewriter.classList.remove("is-typing");
    typewriter.classList.add("is-complete");
    typewriterComplete = true;
}

function typeNextCharacter() {
    if (root.classList.contains("reduce-motion")) {
        completeTypewriter();
        return;
    }

    const line = typewriterLines[typewriterLineIndex];
    const value = typewriterValues[typewriterLineIndex];
    const text = line.dataset.typeText;

    typewriterCharacterIndex += 1;
    value.textContent = text.slice(0, typewriterCharacterIndex);
    value.append(typewriterCursor);

    if (typewriterCharacterIndex < text.length) {
        const typedCharacter = text[typewriterCharacterIndex - 1];
        typewriterTimer = window.setTimeout(typeNextCharacter, typedCharacter === " " ? 45 : 72);
        return;
    }

    if (typewriterLineIndex < typewriterLines.length - 1) {
        typewriterLineIndex += 1;
        typewriterCharacterIndex = 0;
        typewriterTimer = window.setTimeout(typeNextCharacter, 190);
        return;
    }

    typewriter.classList.remove("is-typing");
    typewriter.classList.add("is-complete");
    typewriterComplete = true;
}

function prepareTypewriter() {
    if (!typewriter || typewriterPrepared) return;

    typewriterValues.forEach((value) => {
        value.textContent = "";
    });
    typewriterValues[0].append(typewriterCursor);
    typewriter.classList.add("is-typing");
    typewriterPrepared = true;
    typewriterTimer = window.setTimeout(typeNextCharacter, 650);
}

function setReducedMotion(isReduced, shouldSave = true) {
    root.classList.toggle("reduce-motion", isReduced);
    motionButton.setAttribute("aria-pressed", String(isReduced));
    motionLabel.textContent = isReduced ? "Enable motion" : "Reduce motion";
    motionButton.setAttribute("aria-label", isReduced ? "Enable motion" : "Reduce motion");

    if (shouldSave) {
        localStorage.setItem("reduceMotion", isReduced ? "1" : "0");
    }

    if (isReduced) {
        reveals.forEach((element) => element.classList.add("is-visible"));
    }
}

const initialReducedMotion = savedMotionPreference === null
    ? systemPrefersReducedMotion.matches
    : savedMotionPreference === "1";

if (!initialReducedMotion) {
    prepareTypewriter();
}

setReducedMotion(initialReducedMotion, false);

motionButton.addEventListener("click", () => {
    setReducedMotion(!root.classList.contains("reduce-motion"));
});

projects.forEach((project) => {
    const links = [...project.querySelectorAll("a[href]")];

    // Project navigation rule: single-link projects open that repository or notebook; multi-link projects open their live website instead of GitHub.
    const destination = links.length > 1
        ? links.find((link) => !link.href.includes("github.com")) || links[0]
        : links[0];

    if (!destination) return;

    const title = project.querySelector("h3")?.textContent.trim() || "project";
    const primaryLink = document.createElement("a");

    primaryLink.className = "project__primary-link";
    primaryLink.href = destination.getAttribute("href");
    primaryLink.target = destination.target;
    primaryLink.rel = destination.rel;
    primaryLink.setAttribute("aria-label", `Open ${title}`);

    project.classList.add("project--clickable");
    project.prepend(primaryLink);
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px"
});

if (!initialReducedMotion) {
    reveals.forEach((element) => revealObserver.observe(element));
} else {
    reveals.forEach((element) => element.classList.add("is-visible"));
}

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
    });
}, {
    rootMargin: "-38% 0px -52% 0px",
    threshold: 0
});

sections.forEach((section) => sectionObserver.observe(section));

let frameRequested = false;

function updateScrollInterface() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    frameRequested = false;
}

window.addEventListener("scroll", () => {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(updateScrollInterface);
}, { passive: true });

window.addEventListener("pointermove", (event) => {
    if (root.classList.contains("reduce-motion")) return;
    root.style.setProperty("--pointer-x", `${event.clientX}px`);
    root.style.setProperty("--pointer-y", `${event.clientY}px`);
}, { passive: true });

updateScrollInterface();
