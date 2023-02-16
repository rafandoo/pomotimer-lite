<template>
    <div class="container-fluid p-4">
        <SwitchHeader />
        <ProgressTimer />
        <CtrlButtons />
    </div>
</template>

<script>
import SwitchHeader from './SwitchHeader.vue';
import ProgressTimer from './ProgressTimer.vue';
import CtrlButtons from './CtrlButtons.vue';

export default {
    name: 'BodyPage',
    props: {
        msg: String
    },
    components: {
        SwitchHeader,
        ProgressTimer,
        CtrlButtons
    },
}
</script>

<style scoped>

</style>
