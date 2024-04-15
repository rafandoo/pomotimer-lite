<template>
    <div class="row">
        <div class="col">
            <div class="text-white mt-7 mb-7">
                <figure class="timer">
                    <div class="minutes">0</div>
                    <div>:</div>
                    <div class="seconds">00</div>
                    <audio :src="require('@/assets/sounds/alarm.mp3')" id="alarm"></audio>
                    <svg class="progress-ring" height="220" width="220">
                        <circle class="progress-ring circle" stroke-width="4" fill="transparent" r="91" cx="110"
                            cy="110" />
                    </svg>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressTimer'
}
</script>

<style scoped>
.timer {
    padding: 3px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 30%;
    font-size: 30px;
}

.progress-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.progress-ring .circle {
    transition: 0.5s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: #ffffff;
}

@media screen and (max-width: 675px) {
    .progress-ring {
        width: 200px;
        height: 200px;
    }

    .progress-ring .circle {
        stroke-width: 4px;
        r: 90px;
        cx: 100px;
        cy: 100px;
    }
}
</style>
