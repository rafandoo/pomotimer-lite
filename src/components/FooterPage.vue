<template>
    <footer class="text-center bg-dark" style="margin-top: 40px;">
        <div class="container text-white py-4 py-lg-4">
            <p class="text-muted mb-0">Copyright © 2023 {{ name }}</p>
            <ul class="list-inline mt-2">
                <li class="list-inline-item me-4">
                    <a :href="github_link" target="_blank">
                        <i class="fab fa-github text-light"></i>
                    </a>
                </li>
                <li class="list-inline-item me-4">
                    <a :href="instagram_link" target="_blank">
                        <i class="fab fa-instagram text-light"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a :href="personal_link" target="_blank">
                        <i class="fas fa-code text-light"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterPage',
    props: {
        name: String,
        github_link: String,
        instagram_link: String,
        personal_link: String
    }
}
</script>

<style scoped>

</style>
