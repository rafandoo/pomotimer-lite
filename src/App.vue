<template>
    <HeaderPage title="PomoTimer" :logo_img="require('./assets/img/pomodoro.png')" />
    <BodyPage />
    <FooterPage 
        name="Rafael Camargo" 
        github_link="https://www.github.com/rafandoo"
        instagram_link="https://www.instagram.com/rafandoo/" 
        personal_link="https://github.com/rafandoo/pomotimer-lite" 
    />
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import BodyPage from './components/BodyPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
    name: 'App',
    components: {
        HeaderPage,
        BodyPage,
        FooterPage
    },
    methods: {
        progressCircle() {
            const progress = document.querySelector(".progress-ring.circle"),
                radius = progress.r.baseVal.value,
                circumference = radius * 2 * Math.PI;

            progress.style.strokeDasharray = circumference;
            progress.style.strokeDashoffset = circumference;

            /**
             * The function takes a percentage as an argument and sets the stroke-dashoffset of the progress circle
             * to the circumference of the circle minus the percentage of the circumference.
             * @param percent - The percentage of the circle that should be filled.
             */
            function setProgress(percent) {
                const offset = circumference - (percent / 100) * circumference;
                progress.style.strokeDashoffset = offset;
            }

            return {
                setProgress
            }
        },

        switch() {
            const activeSwitch = document.querySelector('.active'),
                switchBtnRight = document.querySelector('.switch-button-case.right'),
                switchBtnLeft = document.querySelector('.switch-button-case.left');

            function switchLeft() {
                switchBtnRight.classList.remove('active-case');
                switchBtnLeft.classList.add('active-case');
                activeSwitch.style.left = '0%';
                activeSwitch.style.borderRadius = '20px 0px 0px 20px';
            }

            function switchRight() {
                switchBtnRight.classList.add('active-case');
                switchBtnLeft.classList.remove('active-case');
                activeSwitch.style.left = '50%';
                activeSwitch.style.borderRadius = '0px 20px 20px 0px';
            }

            return {
                switchLeft,
                switchRight
            }
        },

        timer(progressCircle, switchBtn) {
            progressCircle.setProgress(100);

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

                if (secs > 0) {
                    perc = Math.ceil(((totalsecs - secs) / totalsecs) * 100);
                    progressCircle.setProgress(perc);
                    secs--;
                    initial = window.setTimeout(decremenTime, 1000);
                } else {
                    mins = 0;
                    secs = 0;
                    playAlarm();
                    let status = localStorage.getItem("status");

                    if (!countCycles()) {
                        if (status === "focus") {
                            switchBtn.switchRight();
                            localStorage.setItem("status", "break");
                            playTimer();
                        } else {
                            switchBtn.switchLeft();
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
                progressCircle.setProgress(100);
                switchBtn.switchLeft();
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
        }
    },
    mounted() {
        this.timer(this.progressCircle(), this.switch());
    }
}
</script>

<style>
@import './assets/css/switch.css';
@import './assets/css/timer.css';
@import './assets/bootstrap/css/bootstrap.min.css';
@import './assets/fonts/fontawesome-all.min.css';
@import './assets/fonts/font-awesome.min.css';
@import './assets/fonts/fontawesome5-overrides.min.css';
@import './assets/css/style.css';
@import 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&amp;display=swap';
@import 'https://fonts.googleapis.com/css?family=Poppins&amp;display=swap';
</style>
