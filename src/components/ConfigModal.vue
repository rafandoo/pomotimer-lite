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
                                <span class="input-group-text info-config">
                                    <button id="plus-btn-focus" class="plus-btn text-white" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <span class="change-value-span" id="focus"></span>
                                    <button id="minus-btn-focus" class="minus-btn text-white" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Break Time</span>
                                <span class="input-group-text info-config">
                                    <button id="plus-btn-break" class="plus-btn text-white" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <span class="change-value-span" id="break"></span>
                                    <button id="minus-btn-break" class="minus-btn text-white" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Cycles</span>
                                <span class="input-group-text info-config">
                                    <button id="plus-btn-cycles" class="plus-btn text-white" type="button">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                    <span class="change-value-span" id="cycles"></span>
                                    <button id="minus-btn-cycles" class="minus-btn text-white" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                </span>
                            </div>
                            <div class="input-group justify-content-center p-2">
                                <span class="input-group-text info">Sound</span>
                                <span class="input-group-text info-config">
                                    <label class="checkbox path m-1">
                                        <input type="checkbox" checked id="alarm-check">
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
                            <button type="submit" class="save-btn" id="save-btn" data-bs-dismiss="modal"
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
    mounted() {
        this.initValues();
        this.setupEventListeners();
    },
    methods: {
        initValues() {
            const defaults = {
                focus: 25,
                break: 5,
                cycles: 4,
                alarm: true
            }
            const spans = document.querySelectorAll(".change-value-span");

            for (const key in defaults) {
                if(localStorage.getItem(key) === null) {
                    localStorage.setItem(key, defaults[key]);
                }
            }
            localStorage.setItem("status", "focus");
            spans.forEach((span) => {
                span.innerHTML = localStorage.getItem(span.id);
            });
        },
        setupEventListeners() {
            const buttons = document.querySelectorAll(".plus-btn, .minus-btn");
            buttons.forEach((button) => {
                const type = button.id.replace("plus-btn-", "").replace("minus-btn-", "");
                button.addEventListener('click', () => {
                    this.adjustValue(type, button.classList.contains('plus-btn') ? 1 : -1);
                })
            });
            document.querySelector("form").addEventListener("submit", (e) => {
                e.preventDefault();
                localStorage.setItem("focus", document.querySelector('#focus').innerHTML);
                localStorage.setItem("break", document.querySelector('#break').innerHTML);
                localStorage.setItem("cycles", document.querySelector('#cycles').innerHTML);
                localStorage.setItem("alarm", document.querySelector("#alarm-check").checked);
                this.emitter.emit('updateCycles');
            });
        },
        adjustValue(type, change) {
            const element = document.querySelector(`#${type}`);
            let value = parseInt(element.innerHTML);
            const min = 1, max = 99;
            value = Math.min(max, Math.max(min, value + change));
            element.innerHTML = value;
        }
    }
}
</script>
