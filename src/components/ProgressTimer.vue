<template>
    <div class="row">
        <div class="col">
            <div class="text-white mt-7 mb-7">
                <figure class="timer">
                    <div class="minutes">0</div>
                    <div>:</div>
                    <div class="seconds">00</div>
                    <audio :src="require('../assets/sounds/alarm.mp3')" id="alarm"></audio>
                    <svg class="progress-ring" height="220" width="220">
                        <circle class="progress-ring circle" stroke-width="4" fill="transparent" r="91" cx="110" cy="110" />
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

</style>
