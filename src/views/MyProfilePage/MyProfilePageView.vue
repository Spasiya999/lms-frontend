<template>
    <div class="container-fluid">
        <div class="container col-xl-10 col-xxl-8 px-4">

            <div class="row align-items-center g-lg-5 py-5">
                <div class="col-lg-12 text-center text-lg-start">
                    <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3 text-center">My Profile</h1>
                </div>
            </div>

            <div class="d-flex align-items-start w-100 min-height-100vh">
                <div class="nav gap-3 d-block flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                    aria-orientation="vertical">
                    <button class="nav-link nav-link-cus active mb-3" id="v-pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home"
                        aria-selected="true">Profile</button>
                    <button class="nav-link nav-link-cus mb-3" id="v-pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                        aria-selected="false">Courses</button>
                    <!-- <button class="nav-link nav-link-cus mb-3" id="v-pills-messages-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                        aria-selected="false">Certificates</button> -->
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active p-3 bg-secondary-cus rounded-4 w-100" id="v-pills-home"
                        role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustomUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername"
                                        aria-describedby="inputGroupPrepend" required>
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom03" required>
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="validationCustom05" required>
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade p-3 bg-secondary-cus rounded-4 w-100 w-min-100" id="v-pills-profile"
                        role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4">
                                <h4>Course Name</h4>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A list item
                                        <span class="badge text-bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A second list item
                                        <span class="badge text-bg-primary rounded-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A third list item
                                        <span class="badge text-bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h4>Course Name</h4>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A list item
                                        <span class="badge text-bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A second list item
                                        <span class="badge text-bg-primary rounded-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A third list item
                                        <span class="badge text-bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h4>Course Name</h4>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A list item
                                        <span class="badge text-bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A second list item
                                        <span class="badge text-bg-primary rounded-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A third list item
                                        <span class="badge text-bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h4>Course Name</h4>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A list item
                                        <span class="badge text-bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A second list item
                                        <span class="badge text-bg-primary rounded-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A third list item
                                        <span class="badge text-bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h4>Course Name</h4>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A list item
                                        <span class="badge text-bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A second list item
                                        <span class="badge text-bg-primary rounded-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A third list item
                                        <span class="badge text-bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h4>Course Name</h4>
                                <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A list item
                                        <span class="badge text-bg-primary rounded-pill">14</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A second list item
                                        <span class="badge text-bg-primary rounded-pill">2</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                        A third list item
                                        <span class="badge text-bg-primary rounded-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                    <!-- <div class="tab-pane fade p-3 bg-secondary-cus rounded-4 w-100 w-min-100" id="v-pills-disabled"
                        role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff;
}

.nav-pills .nav-link.disabled {
    pointer-events: none;
    opacity: 0.6;
}

.select2-container .select2-selection--single {
    height: 36px !important;
}

.nav-link-cus {
    color: #000 !important;
    background-color: #cccccc !important;
}

.bg-secondary-cus {
    background-color: #cccccc;
}

.min-height-100vh {
    min-height: 50vh;
}
</style>

<script>
export default {
    name: 'MyProfilePageView',
};
</script>