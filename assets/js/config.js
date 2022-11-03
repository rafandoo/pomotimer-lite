/* Setting the default values for the local storage. */
localStorage.setItem("focusMinutes", 25);
localStorage.setItem("breakMinutes", 5);
localStorage.setItem("cycles", 4);
localStorage.setItem("status", "focus");
localStorage.setItem("alarm", true);

/* This is the JavaScript code that is used to make the buttons focus. */
window.onload = function () {
    const plusBtnFocus = document.querySelector("#plusBtnFocus"),
        minusBtnFocus = document.querySelector("#minusBtnFocus"),
        plusBtnBreak = document.querySelector("#plusBtnBreak"),
        minusBtnBreak = document.querySelector("#minusBtnBreak"),
        plusBtnCycles = document.querySelector("#plusBtnCycles"),
        minusBtnCycles = document.querySelector("#minusBtnCycles"),
        min = 1,
        max = 99;

    let focusMinutes = document.querySelector("#focusMinutes"),
        focusValue = 25,
        breakMinutes = document.querySelector("#breakMinutes"),
        breakValue = 5,
        cycles = document.querySelector("#cycles")
        cyclesValue = 4;

    /* Saying that when the minus button is clicked, the value of the breakValue will decrease by 1. */
    minusBtnBreak.onclick = function () {
        if (breakValue > min) {
            breakValue -= 1;
            breakMinutes.innerText = breakValue;
        }
    }
    /* Saying that when the plus button is clicked, the value of the breakValue will increase by 1. */
    plusBtnBreak.onclick = function () {
        if (breakValue < max) {
            breakValue += 1;
            breakMinutes.innerText = breakValue;
        }
    }

    /* Saying that when the minus button is clicked, the value of the focusValue will decrease by 1. */
    minusBtnFocus.onclick = function () {
        if (focusValue > min) {
            focusValue -= 1;
            focusMinutes.innerText = focusValue;
        }
    }
    /* Saying that when the plus button is clicked, the value of the focusValue will increase by 1. */
    plusBtnFocus.onclick = function () {
        if (focusValue < max) {
            focusValue += 1;
            focusMinutes.innerText = focusValue;
        }
    }

    /* Saying that when the minus button is clicked, the value of the cyclesValue will decrease by 1. */
    minusBtnCycles.onclick = function () {
        if (cyclesValue > min) {
            cyclesValue -= 1;
            cycles.innerText = cyclesValue;
        }
    }

    /* Saying that when the plus button is clicked, the value of the cyclesValue will increase by 1. */
    plusBtnCycles.onclick = function () {
        if (cyclesValue < max) {
            cyclesValue += 1;
            cycles.innerText = cyclesValue;
        }
    }

    /* Saying that when the submit button is clicked, the value of the focusValue and breakValue will
    be stored in the local storage. */
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("focusMinutes", focusMinutes.innerHTML);
        localStorage.setItem("breakMinutes", breakMinutes.innerHTML);
        localStorage.setItem("cycles", cycles.innerHTML);
        localStorage.setItem("alarm", document.querySelector("#alarmCheck").checked);
    });
}