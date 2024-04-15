<template>
    <nav class="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div class="container">
            <div class="col d-flex justify-content-center align-items-center">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <span class="title">{{ title }}&nbsp;</span>
                    <img :src="logo" :alt="title">
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
        title: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            required: true
        }
    },
    components: {
        ConfigModal
    }
}
</script>
