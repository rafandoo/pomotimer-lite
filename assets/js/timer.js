const playBtn = document.querySelector("#playBtn"),
    pauseBtn = document.querySelector("#pauseBtn"),
    actIcon = document.querySelector("#actIcon"),
    refreshBtn = document.querySelector("#refreshBtn");

localStorage.setItem("btn", "focus");

const minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds"),
    timer = document.querySelector(".timer");

let initial, totalsecs, perc, paused, mins, secs;

playBtn.addEventListener("click", () => {
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
        mins = +localStorage.getItem("focusMinutes") || 1;
    } else {
        mins = +localStorage.getItem("breakMinutes") || 1;
    }

    secs = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenTime(), 60);
    paused = false;
    playBtn.setAttribute("hidden", true);
    pauseBtn.removeAttribute("hidden");
});

pauseBtn.addEventListener("click", () => {
    if (paused === undefined) {
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout("decremenTime()", 60);
        actIcon.classList.remove("fa-play");
        actIcon.classList.add("fa-pause");
    } else {
        clearTimeout(initial);
        paused = true;
        actIcon.classList.remove("fa-pause");
        actIcon.classList.add("fa-play");
    }
});

refreshBtn.addEventListener("click", () => {
    clearTimeout(initial);
    setProgress(0);
    playBtn.removeAttribute("hidden");
    pauseBtn.setAttribute("hidden", true);
    if (pauseBtn.classList.contains("fa-play")) {
        pauseBtn.classList.remove("fa-play");
        pauseBtn.classList.add("fa-pause");
    }
    minutes.textContent = "00";
    seconds.textContent = "00";
});

function decremenTime() {
    minutes.textContent = Math.floor(secs / 60);
    seconds.textContent = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`;
    if (progress.classList.contains("danger")) {
        progress.classList.remove("danger");
    }

    if (secs > 0) {
        perc = Math.ceil(((totalsecs - secs) / totalsecs) * 100);
        setProgress(perc);
        secs--;
        initial = window.setTimeout("decremenTime()", 1000);
        if (secs < 10) {
            progress.classList.add("danger");
        }
    } else {
        mins = 0;
        secs = 0;
        bell.play();
        let btn = localStorage.getItem("btn");

        if (btn === "focus") {
            playBtn.textContent = "start break";
            playBtn.classList.add("break");
            localStorage.setItem("btn", "break");
        } else {
            playBtn.classList.remove("break");
            playBtn.textContent = "start focus";
            localStorage.setItem("btn", "focus");
        }
        changeBtn();
    }
}
