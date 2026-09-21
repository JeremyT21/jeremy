const root = document.documentElement;
const header = document.querySelector(".site-header");
const progress = document.getElementById("scrollProgress");
const motionButton = document.getElementById("motionToggle");
const motionLabel = motionButton.querySelector(".motion-toggle__label");
const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("[data-section]")];
const reveals = [...document.querySelectorAll(".reveal")];
const typewriter = document.querySelector("[data-typewriter]");
const typewriterLines = typewriter
    ? [...typewriter.querySelectorAll("[data-type-text]")]
    : [];
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

function completeTypewriter() {
    if (!typewriter) return;

    window.clearTimeout(typewriterTimer);
    typewriterLines.forEach((line) => {
        line.textContent = line.dataset.typeText;
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
    const text = line.dataset.typeText;

    typewriterCharacterIndex += 1;
    line.textContent = text.slice(0, typewriterCharacterIndex);
    line.append(typewriterCursor);

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

    typewriterLines.forEach((line) => {
        line.textContent = "";
    });
    typewriterLines[0].append(typewriterCursor);
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
