<template>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                    Single Course Page
                </h1>
                <p class="col-lg-10 fs-4">
                    This is a course description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                    deleniti voluptates molestias quasi? Veniam, eius! Odio illo, quasi in adipisci enim non sed aliquid
                    perferendis cupiditate eum fugit, dolorum saepe!
                </p>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <div class="border rounded-3 bg-body-tertiary">
                    <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
                        class="w-100 rounded-3" alt="gg">
                </div>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-md-6 col-12 mb-4">
                <div class="border border-2 border-primary rounded-3 p-4">
                    <!-- Course Details -->
                    <p class="text-body-emphasis fw-bold fs-5">Course Details</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sunt corrupti animi porro
                        quisquam repudiandae? Repellat doloribus sapiente temporibus voluptatem, eos perspiciatis nulla
                        beatae quibusdam, voluptas mollitia nihil aliquam rem!</p>
                </div>
            </div>
            <div class="col-md-6 col-12 mb-4 h-100">
                <!-- entry requirements -->
                <div class="border border-2 border-primary rounded-3 p-4">
                    <p class="text-body-emphasis fw-bold fs-5">Entry requirements</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sunt corrupti animi porro
                        quisquam repudiandae? Repellat doloribus sapiente temporibus voluptatem, eos perspiciatis nulla
                        beatae quibusdam, voluptas mollitia nihil aliquam rem!</p>
                </div>
            </div>
            <div class="col-md-6 col-12 mb-4 h-100">
                <!-- entry requirements -->
                <div class="border border-2 border-primary rounded-3 p-4">
                    <p class="text-body-emphasis fw-bold fs-5">Course curriculum</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sunt corrupti animi porro
                        quisquam repudiandae? Repellat doloribus sapiente temporibus voluptatem, eos perspiciatis nulla
                        beatae quibusdam, voluptas mollitia nihil aliquam rem!</p>
                </div>
            </div>
            <div class="col-md-6 col-12 mb-4">
                <div class="border border-2 border-primary rounded-3 p-4">
                    <!-- Career opportunities -->
                    <p class="text-body-emphasis fw-bold fs-5">Career opportunities</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sunt corrupti animi porro
                        quisquam repudiandae? Repellat doloribus sapiente temporibus voluptatem, eos perspiciatis nulla
                        beatae quibusdam, voluptas mollitia nihil aliquam rem!</p>
                </div>
            </div>
            <div>
                <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="name">
                        <label for="floatingName">Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="phoneNumber" placeholder="123-456-7890">
                        <label for="phoneNumber">Phone number</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="city" placeholder="City">
                        <label for="city">City</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCoursePage',
};
</script>