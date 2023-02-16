<template>
    <nav class="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div class="container">
            <div class="col d-flex justify-content-center align-items-center">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <span id="title">{{ title }}&nbsp;</span>
                    <img :src="logo_img" :alt="title">
                </a>
                <ConfigModal />
            </div>
        </div>
    </nav>
</template>

<script>
import ConfigModal from './ConfigModal.vue';

export default {
    name: 'HeaderPage',
    props: {
        title: String,
        logo_img: String
    },
    components: {
        ConfigModal
    }
}
</script>

<style scoped>

</style>
