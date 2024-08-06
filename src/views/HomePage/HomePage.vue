<template>
    <Slider />

    <div class="container-fluid">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-6 col-12">
                    <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" class="w-100 rounded-3"
                        alt="">
                </div>
                <div class="col-lg-6 col-12">
                    <h1 class="fs-2 fw-bold text-dark">
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
        <h1 class="pb-2 border-bottom text-center">Features with title</h1>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div class="col d-flex flex-column align-items-start gap-2">
                <h2 class="fw-bold text-body-emphasis">We have most respected Courses</h2>
                <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading. We'll add
                    onto it with another sentence and probably just keep going until we run out of words.</p>
                <a href="#" class="btn btn-primary btn-lg">Primary button</a>
            </div>

            <div class="col">
                <div class="row row-cols-1 row-cols-sm-2 g-4">
                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <svg class="bi" width="1em" height="1em">
                                <use xlink:href="#collection"></use>
                            </svg>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <svg class="bi" width="1em" height="1em">
                                <use xlink:href="#gear-fill"></use>
                            </svg>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <svg class="bi" width="1em" height="1em">
                                <use xlink:href="#speedometer"></use>
                            </svg>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>

                    <div class="col d-flex flex-column gap-2">
                        <div
                            class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                            <svg class="bi" width="1em" height="1em">
                                <use xlink:href="#table"></use>
                            </svg>
                        </div>
                        <h4 class="fw-semibold mb-0 text-body-emphasis">Featured title</h4>
                        <p class="text-body-secondary">Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <CoursesTabView />

    <div class="container-fluid">
        <div class="container px-4 py-5" id="custom-cards">
            <h1 class="pb-2 border-bottom text-center">Custom cards</h1>

            <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style="background-image: url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg');">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                            <ul class="d-flex list-unstyled mt-auto">
                                <li class="me-auto">
                                    <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
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
                    </div>
                </div>

                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style="background-image: url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg');">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple
                                lines</h3>
                            <ul class="d-flex list-unstyled mt-auto">
                                <li class="me-auto">
                                    <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                                        alt="Bootstrap" width="32" height="32"
                                        class="rounded-circle border border-white">
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#geo-fill"></use>
                                    </svg>
                                    <small>Pakistan</small>
                                </li>
                                <li class="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#calendar3"></use>
                                    </svg>
                                    <small>4d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                        style="background-image: url('https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg');">
                        <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                            <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h3>
                            <ul class="d-flex list-unstyled mt-auto">
                                <li class="me-auto">
                                    <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                                        alt="Bootstrap" width="32" height="32"
                                        class="rounded-circle border border-white">
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#geo-fill"></use>
                                    </svg>
                                    <small>California</small>
                                </li>
                                <li class="d-flex align-items-center">
                                    <svg class="bi me-2" width="1em" height="1em">
                                        <use xlink:href="#calendar3"></use>
                                    </svg>
                                    <small>5d</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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
    }
}
</script>