// ******* FOR HAVING SMOOTH TRANSITIONING ON THE RIGHT PANEL OF WEBSITE:
const tabs = document.querySelectorAll(".tab");
const contentBox = document.getElementById("contentBox");
const panelIds = ["home","portfolio","resume","contact","awards"];
const panels = panelIds.map(id => document.getElementById(id));

//this function sets the wrapper style height to match active panel
function setBoxHeightTo(panel)
{
    const prevDisplay = panel.style.display;
    panel.style.display = "block";

    const h = panel.scrollHeight;
    contentBox.style.height = h + "px";

    panel.style.display = prevDisplay;
}

//Activates and initializes the right content on the webpage
const first = panels.find(p => !p.classList.contains("hidden")) || panels[0];
first.classList.add("is-active");

//Set the height attribute
requestAnimationFrame(() => setBoxHeightTo(first));

const mainEl = document.querySelector(".main");

//Depending on what the site loads on, use that as starting colour theme for right tab's content
mainEl.dataset.theme = first.id;

tabs.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.dataset.tab;
        const next = document.getElementById(targetId);
        const current = panels.find(p => p.classList.contains("is-active"));

        if (!next || current === next) return;

        //Change the background theme when button clicked on right tab
        mainEl.dataset.theme = targetId;

        //Update tab to show which button is selected
        tabs.forEach(b => b.setAttribute("aria-selected", String(b === btn)));
        contentBox.style.height = current.scrollHeight + "px";
        current.classList.remove("is-active");

        requestAnimationFrame(() => {
            current.classList.add("hidden");
            next.classList.remove("hidden");

            //Animate and transition in the new content
            void contentBox.offsetHeight;
            next.classList.add("is-active");
            contentBox.style.height = next.scrollHeight + "px";
        });
    });
});


//Ensure proper height attribute for right content on webpage if window is changed
window.addEventListener("resize", () => {
    const active = panels.find(p => p.classList.contains("is-active"));
    if (active) setBoxHeightTo(active);
});

// ******* FOR DOING JEREMYs IN BACKGROUND:
document.querySelectorAll(".ticker-track").forEach(track => {
    const duration = parseFloat(
        getComputedStyle(track).animationDuration
    );

    //Have position of background JEREMYs in each line be randomized when webpage is loaded
    const randomOffset = Math.random() * duration;
    track.style.animationDelay = '-' + randomOffset + 's';
});

// ******* FOR REDUCING MOTION:
const motionBtn = document.getElementById("motionToggle");

function setReducedMotion(on){
    document.documentElement.classList.toggle("reduce-motion", on);
    motionBtn.setAttribute("aria-pressed", String(on));

    if(on)
    {
        motionBtn.textContent = "Resume Motion";
        localStorage.setItem("reduceMotion", "1");
    }
    
    else
    {
        motionBtn.textContent = "Reduce Motion";
        localStorage.setItem("reduceMotion", "0");
    }
}

//If reduced motion was requested previously, remember user's choice, else have motion on
const saved = localStorage.getItem("reduceMotion") === "1";
setReducedMotion(saved);

motionBtn.addEventListener("click", () => {
    const isOn = document.documentElement.classList.contains("reduce-motion");
    setReducedMotion(!isOn);
});

// ******* FOR USING CONTACT ME FUNCTION