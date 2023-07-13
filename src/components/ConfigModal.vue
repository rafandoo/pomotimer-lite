<template>
    <div class="config-div">
        <a id="config" class="config" data-bs-target="#modal-config" data-bs-toggle="modal">
            <i class="fas fa-cog text-white"></i>
        </a>
        <div class="modal fade" role="dialog" tabindex="-1" id="modal-config">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h4 class="modal-title">Settings</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form target="_self">
                        <div class="modal-body">
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Focus Time</span>
                                <span class="input-group-text infoConfig">
                                    <span id="focusMinutes"
                                        style="font-size: 20px;margin-left: 8px;margin-right: 8px;">25</span>
                                    <button id="plusBtnFocus" class="plusBtn text-white" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <button id="minusBtnFocus" class="minusBtn text-white" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Break Time</span>
                                <span class="input-group-text infoConfig">
                                    <span id="breakMinutes"
                                        style="font-size: 20px;margin-left: 8px;margin-right: 8px;">5</span>
                                    <button id="plusBtnBreak" class="plusBtn text-white" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <button id="minusBtnBreak" class="minusBtn text-white" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Cycles</span>
                                <span class="input-group-text infoConfig">
                                    <span id="cycles"
                                        style="font-size: 20px;margin-left: 8px;margin-right: 8px;">4</span>
                                    <button id="plusBtnCycles" class="plusBtn text-white" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <button id="minusBtnCycles" class="minusBtn text-white" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Sound</span>
                                <span class="input-group-text infoConfig">
                                    <label class="checkbox path m-1">
                                        <input type="checkbox" checked id="alarmCheck">
                                        <svg viewBox="0 0 21 21">
                                            <path
                                                d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186">
                                            </path>
                                        </svg>
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="save-btn" id="saveBtn" data-bs-dismiss="modal"
                                aria-label="Close">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConfigModal',
    methods: {
        config() {
            /* Setting the default values for the local storage. */
            localStorage.setItem("focusMinutes", 0.1);
            localStorage.setItem("breakMinutes", 0.1);
            localStorage.setItem("cycles", 4);
            localStorage.setItem("status", "focus");
            localStorage.setItem("alarm", true);

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
                    cycles = document.querySelector("#cycles"),
                    cyclesValue = 4;
                
                minusBtnBreak.onclick = function () {
                    if (breakValue > min) {
                        breakValue -= 1;
                        breakMinutes.innerText = breakValue;
                    }
                }

                plusBtnBreak.onclick = function () {
                    if (breakValue < max) {
                        breakValue += 1;
                        breakMinutes.innerText = breakValue;
                    }
                }

                minusBtnFocus.onclick = function () {
                    if (focusValue > min) {
                        focusValue -= 1;
                        focusMinutes.innerText = focusValue;
                    }
                }

                plusBtnFocus.onclick = function () {
                    if (focusValue < max) {
                        focusValue += 1;
                        focusMinutes.innerText = focusValue;
                    }
                }

                minusBtnCycles.onclick = function () {
                    if (cyclesValue > min) {
                        cyclesValue -= 1;
                        cycles.innerText = cyclesValue;
                    }
                }

                plusBtnCycles.onclick = function () {
                    if (cyclesValue < max) {
                        cyclesValue += 1;
                        cycles.innerText = cyclesValue;
                    }
                }

                document.querySelector("form").addEventListener("submit", (e) => {
                    e.preventDefault();
                    localStorage.setItem("focusMinutes", focusMinutes.innerHTML);
                    localStorage.setItem("breakMinutes", breakMinutes.innerHTML);
                    localStorage.setItem("cycles", cycles.innerHTML);
                    localStorage.setItem("alarm", document.querySelector("#alarmCheck").checked);
                });
            }
        }
    },
    mounted() {
        this.config();
    }
}
</script>

<style scoped>

</style>
