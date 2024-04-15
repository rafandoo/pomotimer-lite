<template>
    <footer class="text-center bg-dark">
        <div class="container text-white py-4 py-lg-4">
            <p class="text-muted mb-0">Copyright © 2022 - {{ new Date().getFullYear() }} {{ name }}</p>
            <ul class="list-inline mt-3">
                <li class="list-inline-item me-4">
                    <a :href="github_link" target="_blank" rel='noopener noreferrer'>
                        <i class="fab fa-github text-light"></i>
                    </a>
                </li>
                <li class="list-inline-item me-4">
                    <a :href="instagram_link" target="_blank" rel='noopener noreferrer'>
                        <i class="fab fa-instagram text-light"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a :href="personal_link" target="_blank" rel='noopener noreferrer'>
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
        name: {
            type: String,
            required: true
        },
        github_link: {
            type: String,
            required: true
        },
        instagram_link: {
            type: String,
            required: true
        },
        personal_link: {
            type: String,
            required: true
        }
    }
}
</script>
