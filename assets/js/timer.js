const playBtn = document.querySelector("#playBtn"),
    pauseBtn = document.querySelector("#pauseBtn"),
    actIcon = document.querySelector("#actIcon"),
    refreshBtn = document.querySelector("#refreshBtn"),
    alarmCheck = document.querySelector("#alarmCheck"),
    alarm = document.querySelector("#alarm");

localStorage.setItem("status", "focus");

const minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds"),
    timer = document.querySelector(".timer");

let initial, totalsecs, perc, paused, mins, secs;

function playTimer() {
    let status = localStorage.getItem("status");

    if (status === "focus") {
        mins = +localStorage.getItem("focusMinutes") || 25;
    } else {
        mins = +localStorage.getItem("breakMinutes") || 5;
    }

    secs = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenTime(), 60);
    paused = false;
    playBtn.setAttribute("hidden", true);
    pauseBtn.removeAttribute("hidden");
}

playBtn.addEventListener("click", () => {
    playTimer();
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

function playAlarm() {
    if (alarmCheck.checked) {
        alarm.play();
    }
}

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
        playAlarm();
        let status = localStorage.getItem("status");

        if (status === "focus") {
            switchRight();
            localStorage.setItem("status", "break");
            playTimer();
        } else {
            switchLeft();
            localStorage.setItem("status", "focus");
        }
    }
}
