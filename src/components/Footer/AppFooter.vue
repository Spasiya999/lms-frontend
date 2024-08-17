<template>
    <main class="flex-shrink-0">
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p class="col-md-4 mb-0 text-body-secondary fw-semibold">© 2024 Company, Inc</p>

                <a href="/"
                    class="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>

                <ul class="nav col-md-5 justify-content-end">
                    <li class="nav-item">
                        <router-link to="/" @click="scrollToTop"
                            class="nav-link px-2 text-body-secondary fw-semibold">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about-us" @click="scrollToTop"
                            class="nav-link px-2 text-body-secondary fw-semibold">About Us</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/courses" @click="scrollToTop"
                            class="nav-link px-2 text-body-secondary fw-semibold">Courses</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/faq" @click="scrollToTop" class="nav-link px-2 text-body-secondary fw-semibold">FAQs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/news-and-events" @click="scrollToTop" class="nav-link px-2 text-body-secondary fw-semibold">News & Events</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact-us" @click="scrollToTop"
                            class="nav-link px-2 text-body-secondary fw-semibold">Contact Us</router-link>
                    </li>
                </ul>
            </footer>
        </div>
        <ScrollToTopWebsite/>
    </main>
</template>

<script>
import ScrollToTopWebsite from '../ScrollToTopWebsite.vue';
export default {
    name: 'AppFooter',
    components: {
        ScrollToTopWebsite
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    }
}
</script>