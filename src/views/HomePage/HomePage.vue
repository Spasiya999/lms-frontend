<template>
    <Slider />

    <div class="container-fluid">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <img src="../../../public//Images/2336.jpg"
                        class="w-100 rounded-3" alt="">
                </div>
                <div class="col-lg-6 col-12">
                    <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                        Welcome to Our Website
                    </h1>

                    <p class="text-dark">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>

                    <router-link to="/about-us" class="btn btn-primary">Read More</router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-3 col-6 p-2 justify-content-center">
                    <div class="p-3">
                        <div class="d-flex gap-2 justify-content-center align-items-center">
                            <div class="pe-3">
                                <i class="fa-solid fa-graduation-cap text-secondary fs-2"></i>
                            </div>
                            <div>
                                <h3 class="fs-4 text-primary">100+</h3>
                                <h3 class="fs-3 text-dark">Students</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-6 p-2">
                    <div class="p-3">
                        <div class="d-flex gap-2 justify-content-center align-items-center">
                            <div class="pe-3">
                                <i class="fa-solid fa-book text-secondary fs-2"></i>
                            </div>
                            <div>
                                <h3 class="fs-4 text-primary">100+</h3>
                                <h3 class="fs-3 text-dark">Courses</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-6 p-2">
                    <div class="p-3">
                        <div class="d-flex gap-2 justify-content-center align-items-center">
                            <div class="pe-3">
                                <i class="fa-solid fa-chalkboard-user text-secondary fs-2"></i>
                            </div>
                            <div>
                                <h3 class="fs-4 text-primary">100+</h3>
                                <h3 class="fs-3 text-dark">Teachers</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-6 p-2">
                    <div class="p-3">
                        <div class="d-flex gap-2 justify-content-center align-items-center">
                            <div class="pe-3">
                                <i class="fa-solid fa-building text-secondary fs-2"></i>
                            </div>
                            <div>
                                <h3 class="fs-4 text-primary">100+</h3>
                                <h3 class="fs-3 text-dark">Branches</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container px-4 py-5">
        <h1 class="pb-2 border-bottom text-center display-4 fw-bold lh-1 text-body-emphasis mb-3">Features We Provide</h1>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div class="col d-flex flex-column align-items-start gap-2">
                <h2 class="fw-bold text-body-emphasis">We have a lot of features to help you</h2>
                <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading. We'll add
                    onto it with another sentence and probably just keep going until we run out of words.</p>
                <router-link to="/courses" @click="scrollToTop()" class="btn btn-primary btn-lg">See More Courses</router-link>
            </div>

            <div class="col">
                <div class="row row-cols-1 row-cols-sm-2 g-4">
                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small p-2 d-inline-flex align-items-center justify-content-center  bg-gradient fs-1 rounded-3">
                            <i class="fa-solid fa-book text-primary"></i>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Library Features</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small p-2 d-inline-flex align-items-center justify-content-center  bg-gradient fs-1 rounded-3">
                            <i class="fa-solid fa-hotel text-primary"></i>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Hostel Facilities</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small p-2 d-inline-flex align-items-center justify-content-center  bg-gradient fs-1 rounded-3">
                            <i class="fa-solid fa-school text-primary"></i>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Online Classes</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small p-2 d-inline-flex align-items-center justify-content-center  bg-gradient fs-1 rounded-3">
                            <i class="fa-solid fa-graduation-cap text-primary"></i>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Online Exams</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CoursesTabView />

    <div class="container-fluid">
        <div class="container px-4 py-5" id="custom-cards">
            <h1 class="pb-2 border-bottom text-center display-4 fw-bold lh-1 text-body-emphasis mb-3">News and Events</h1>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col">
                    <router-link to="/news-and-events/1" @click="scrollToTop()"
                        class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 fSt-news">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Group Therapy</h3>
                            <ul class="d-flex list-unstyled mt-auto">
                                <li class="me-auto">
                                    <img src="../../../public/Images/people-attending-group-therapy-session-while-sitting-chairs.jpg"
                                        alt="Bootstrap" width="32" height="32"
                                        class="rounded-circle border border-white">
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#geo-fill"></use>
                                    </svg>
                                    <small>Earth</small>
                                </li>
                                <li class="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#calendar3"></use>
                                    </svg>
                                    <small>3d</small>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </div>

                <div class="col">
                    <router-link to="/news-and-events/1" @click="scrollToTop()"
                        class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 secNd-news">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Group Work Session</h3>
                            <ul class="d-flex list-unstyled mt-auto">
                                <li class="me-auto">
                                    <img src="../../../public/Images/business-people-discussing-issues-cafe-table.jpg"
                                        alt="Bootstrap" width="32" height="32"
                                        class="rounded-circle border border-white">
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#geo-fill"></use>
                                    </svg>
                                    <small>Earth</small>
                                </li>
                                <li class="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#calendar3"></use>
                                    </svg>
                                    <small>3d</small>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </div>

                <div class="col">
                    <router-link to="/news-and-events/1" @click="scrollToTop()"
                        class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 third-news">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Campaign About Environment</h3>
                            <ul class="d-flex list-unstyled mt-auto">
                                <li class="me-auto">
                                    <img src="../../../public/Images/people-holding-banners-front-view.jpg"
                                        alt="Bootstrap" width="32" height="32"
                                        class="rounded-circle border border-white">
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#geo-fill"></use>
                                    </svg>
                                    <small>Earth</small>
                                </li>
                                <li class="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#calendar3"></use>
                                    </svg>
                                    <small>3d</small>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <router-link to="/news-and-events" @click="scrollToTop()" class="btn btn-outline-secondary btn-lg px-4">
                    More News
                </router-link>
            </div>
        </div>


    </div>

</template>

<script>

import Slider from '../../components/Slider/SliderVIew.vue';
import CoursesTabView from '../../components/CoursesTabView/CoursesTabView.vue';

export default {
    name: 'HomePage',
    components: {
        Slider,
        CoursesTabView
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    }
}
</script>