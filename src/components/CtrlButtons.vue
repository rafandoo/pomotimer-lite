<template>
    <div class="row">
        <div class="col text-center">
            <button id="refreshBtn" class="text-white" type="button">
                <i class="fa fa-refresh"></i>
            </button>
            <button id="playBtn" class="text-white actionBtn" type="button">
                <i class="fas fa-play"></i>
            </button>
            <button id="pauseBtn" class="text-white actionBtn" type="button" hidden>
                <i id="actIcon" class="fas fa-pause"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CtrlButtons'
}
</script>

<style scoped>

</style>
