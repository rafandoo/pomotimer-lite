/* This is the JavaScript code that is used to make the buttons focus. */
window.onload = function () {
    var plusBtnBreak = document.getElementById("plusBtnBreak"),
        minusBtnBreak = document.getElementById("minusBtnBreak"),
        breakMinutes = document.getElementById("breakMinutes"),
        breakValue = 5,
        min = 0,
        max = 99;

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

    var plusBtnFocus = document.getElementById("plusBtnFocus"),
        minusBtnFocus = document.getElementById("minusBtnFocus"),
        focusMinutes = document.getElementById("focusMinutes"),
        focusValue = 25,
        min = 0,
        max = 99;

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

    /* Saying that when the submit button is clicked, the value of the focusValue and breakValue will
    be stored in the local storage. */
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("focusMinutes", focusMinutes.innerHTML);
        localStorage.setItem("breakMinutes", breakMinutes.innerHTML);
    });
}

