const playBtn = document.querySelector("#playBtn"),
    pauseBtn = document.querySelector("#pauseBtn"),
    actIcon = document.querySelector("#actIcon"),
    refreshBtn = document.querySelector("#refreshBtn"),
    alarm = document.querySelector("#alarm"),
    cycles = document.querySelector("#cycles"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds");

let initial = null,
    totalsecs = 0,
    perc = 0,
    paused = false,
    mins = 0,
    secs = 0, 
    cyclesCount = 0;

/**
 * If the timer is not at zero, decrement the timer by one second and update the progress bar. If the
 * timer is at zero, play the alarm, switch the timer to the other side, and play the timer again.
 */
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
        initial = window.setTimeout(decremenTime, 1000);
        if (secs < 10) {
            progress.classList.add("danger");
        }
    } else {
        mins = 0;
        secs = 0;
        playAlarm();
        let status = localStorage.getItem("status");

        if (!countCycles()) {
            if (status === "focus") {
                switchRight();
                localStorage.setItem("status", "break");
                playTimer();
            } else {
                switchLeft();
                localStorage.setItem("status", "focus");
                playTimer();
            }
        } else {
            resetTimer();
        }
    }
}

/* Counting the number of cycles. */
function countCycles() {
    if (cyclesCount === Number(localStorage.getItem("cycles"))) {
        cyclesCount = 0;
        return true;
    }
    if (localStorage.getItem("status") === "focus") {
        cyclesCount++;
        cycles.textContent = cyclesCount;
    }
    return false;
}

/**
 * If the status is focus, then set the minutes to the focus minutes, otherwise set the minutes to the
 * break minutes, then set the seconds to the minutes times 60, set the total seconds to the minutes
 * times 60, set the timeout to decrement the time, set the paused variable to false, set the play
 * button to hidden, and remove the hidden attribute from the pause button.
 */
function playTimer() {
    let status = localStorage.getItem("status");

    if (status === "focus") {
        mins = Number(localStorage.getItem("focusMinutes"));
    } else {
        mins = Number(localStorage.getItem("breakMinutes"));
    }

    secs = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenTime(), 60);
    paused = false;
    playBtn.setAttribute("hidden", true);
    pauseBtn.removeAttribute("hidden");
}

/**
 * When the reset button is clicked, the timer is reset to 0, the progress bar is reset to 0, the focus
 * button is switched to the left, the status is set to focus, the play button is shown, the pause
 * button is hidden, and the minutes and seconds are set to 0.
 */
function resetTimer() {
    clearTimeout(initial);
    cyclesCount = 0;
    setProgress(0);
    switchLeft();
    localStorage.setItem("status", "focus");
    playBtn.removeAttribute("hidden");
    pauseBtn.setAttribute("hidden", true);
    if (pauseBtn.classList.contains("fa-play")) {
        pauseBtn.classList.remove("fa-play");
        pauseBtn.classList.add("fa-pause");
    }
    minutes.textContent = "0";
    seconds.textContent = "00";
}

/**
 * If the timer is paused, then unpause it, otherwise pause it.
 * @returns the value of the variable paused.
 */
function pauseTimer() {
    if (paused === undefined) {
        return;
    }
    if (paused) {
        paused = false;
        initial = setTimeout(decremenTime, 60);
        actIcon.classList.remove("fa-play");
        actIcon.classList.add("fa-pause");
    } else {
        clearTimeout(initial);
        paused = true;
        actIcon.classList.remove("fa-pause");
        actIcon.classList.add("fa-play");
    }
}

/**
 * If the localStorage item "alarm" is set to "true", play the alarm.
 */
function playAlarm() {
    if (localStorage.getItem("alarm") === "true") {
        alarm.play();
    }
}

playBtn.addEventListener("click", () => {
    playTimer();
});

pauseBtn.addEventListener("click", () => {
    pauseTimer();
});

refreshBtn.addEventListener("click", () => {
    resetTimer();
});