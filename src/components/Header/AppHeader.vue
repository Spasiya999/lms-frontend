<template>
    <div class="bg-primary sticky-top">
        <div class="container sticky-top">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4">
                <div class="col-md-3 mb-2 mb-md-0">
                    <router-link @click="scrollToTop" to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="176" height="40" fill="none"
                            viewBox="0 0 176 40">
                            <path fill="#fff" fill-rule="evenodd"
                                d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                                clip-rule="evenodd"></path>
                            <path fill="#fff" d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                        </svg>
                    </router-link>
                </div>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <router-link to="/" @click="scrollToTop" class="nav-link px-2 text-white fw-500 fs-5">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about-us" @click="scrollToTop" class="nav-link px-2 text-white fw-500 fs-5">About Us</router-link>
                    </li>
                    <li>
                        <router-link to="/courses" @click="scrollToTop" class="nav-link px-2 text-white fw-500 fs-5">Courses</router-link>
                    </li>
                    <li>
                        <router-link to="/contact-us" @click="scrollToTop" class="nav-link px-2 text-white fw-500 fs-5">Contact
                            Us</router-link>
                    </li>
                </ul>

                <div class="col-md-3 text-end">
                    <router-link to="/my-profile" type="button" class="btn btn-outline-light me-2">My Profile</router-link>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>