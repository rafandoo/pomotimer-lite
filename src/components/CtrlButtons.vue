<template>
    <div class="row">
        <div class="col text-center">
            <button id="refresh-btn" class="text-white action-btn" type="button">
                <i class="fa fa-refresh"></i>
            </button>
            <button id="play-btn" class="text-white action-btn" type="button">
                <i class="fas fa-play"></i>
            </button>
            <button id="pause-btn" class="text-white action-btn" type="button" hidden>
                <i class="fas fa-pause"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CtrlButtons'
}
</script>
