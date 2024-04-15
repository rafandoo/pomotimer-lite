<template>
    <HeaderPage title="PomoTimer" :logo="require('@/assets/img/pomodoro.webp')" />
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

        switchToggle() {
            const activeSwitch = document.querySelector('.active'),
                switchBtnRight = document.querySelector('.switch-button-case.right'),
                switchBtnLeft = document.querySelector('.switch-button-case.left');

            function switchToLeft() {
                switchBtnRight.classList.remove('active-case');
                switchBtnLeft.classList.add('active-case');
                activeSwitch.style.left = '0%';
                activeSwitch.style.borderRadius = '20px 0px 0px 20px';
            }

            function switchToRight() {
                switchBtnRight.classList.add('active-case');
                switchBtnLeft.classList.remove('active-case');
                activeSwitch.style.left = '50%';
                activeSwitch.style.borderRadius = '0px 20px 20px 0px';
            }

            return {
                switchToLeft,
                switchToRight
            }
        },

        timer(progressCircle, switchToggle, playBtn, pauseBtn, refreshBtn, alarm, cyclesDisplay, minutesDisplay, secondsDisplay) {
            let initial = null,
                perc = 0,
                paused = false,
                totalsecs = 0,
                mins = 0,
                secs = 0,
                cyclesCount = 0;

            /**
             * Resets the timer by clearing the initial timeout, setting cyclesCount to 0, 
             * updating the progress circle to 100%, switching toggle to the left, 
             * setting the localStorage status to "focus", showing the play button, hiding the pause button, 
             * updating minutes display to "0", and updating seconds display to "00".
             *
             */
            const resetTimer = () => {
                clearTimeout(initial);
                cyclesCount = 0;
                progressCircle.setProgress(100);
                switchToggle.switchToLeft();
                localStorage.setItem("status", "focus");
                playBtn.removeAttribute("hidden");
                pauseBtn.setAttribute("hidden", true);
                minutesDisplay.textContent = "0";
                secondsDisplay.textContent = "00";
            };

            progressCircle.setProgress(100);

            /**
             * If the timer is not at zero, decrement the timer by one second and update the progress bar. If the
             * timer is at zero, play the alarm, switch the timer to the other side, and play the timer again.
             */
            function decremenTime() {
                minutesDisplay.textContent = Math.floor(secs / 60);
                secondsDisplay.textContent = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`;

                if (secs > 0) {
                    perc = Math.ceil(((totalsecs - secs) / totalsecs) * 100);
                    progressCircle.setProgress(perc);
                    secs--;
                    initial = setTimeout(decremenTime, 1000);
                } else {
                    mins = 0;
                    secs = 0;
                    playAlarm();
                    if (!countCycles()) {
                        const status = localStorage.getItem("status");
                        if (status === "focus") {
                            switchToggle.switchToRight();
                            localStorage.setItem("status", "break");
                        } else {
                            switchToggle.switchToLeft();
                            localStorage.setItem("status", "focus");
                        }
                        playTimer();
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
                    cyclesDisplay.textContent = cyclesCount;
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
                const status = localStorage.getItem("status");

                if (status === "focus") {
                    mins = Number(localStorage.getItem("focus"));
                } else {
                    mins = Number(localStorage.getItem("break"));
                }

                secs = mins * 60;
                totalsecs = mins * 60;
                decremenTime();
                paused = false;
                playBtn.setAttribute("hidden", true);
                pauseBtn.removeAttribute("hidden");
            }

            /**
             * If the timer is paused, then unpause it, otherwise pause it.
             */
            function pauseTimer() {
                const changeIcon = pauseBtn.querySelector('i');
                if (paused === undefined) {
                    return;
                }
                if (paused) {
                    paused = false;
                    decremenTime();
                    changeIcon.classList.remove("fa-play");
                    changeIcon.classList.add("fa-pause");
                } else {
                    clearTimeout(initial);
                    paused = true;
                    changeIcon.classList.remove("fa-pause");
                    changeIcon.classList.add("fa-play");
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
        const progressCircle = this.progressCircle(),
            switchToggle = this.switchToggle(),
            playBtn = document.querySelector("#play-btn"),
            pauseBtn = document.querySelector("#pause-btn"),
            refreshBtn = document.querySelector("#refresh-btn"),
            alarm = document.querySelector("#alarm"),
            cyclesDisplay = document.querySelector("#cycles"),
            minutesDisplay = document.querySelector(".minutes"),
            secondsDisplay = document.querySelector(".seconds");

        this.timer(progressCircle, switchToggle, playBtn, pauseBtn, refreshBtn, alarm, cyclesDisplay, minutesDisplay, secondsDisplay);
    }
}
</script>

<style>
@import '@/assets/bootstrap/css/bootstrap.min.css';
@import '@/assets/fonts/fontawesome-all.min.css';
@import '@/assets/fonts/font-awesome.min.css';
@import '@/assets/fonts/fontawesome5-overrides.min.css';
@import '@/assets/css/style.css';
@import 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&amp;display=swap';
@import 'https://fonts.googleapis.com/css?family=Poppins&amp;display=swap';
</style>
