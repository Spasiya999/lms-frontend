<template>
  <div class="container-fluid">
    <div class="container col-xl-10 col-xxl-8 px-4">

      <div class="row align-items-center g-lg-5 pt-5 pb-3">
        <div class="col-lg-12 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3 text-center">Courses</h1>
        </div>
      </div>

      <div class="row">

        <div class="col-lg-12 col-12">
          <div class="row m-2 px-1 py-2 bg-dark-subtle rounded-3">
            <div class="col-12 d-flex gap-3 me-auto">

              <div class="dropdown-center me-auto">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown"
                  data-bs-display="static" aria-expanded="false">
                  Sort by
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <div class="dropdown-item">Name</div>
                  </li>
                  <li>
                    <div class="dropdown-item">Date</div>
                  </li>
                  <li>
                    <div class="dropdown-item">Rating</div>
                  </li>
                </ul>
              </div>

              <div class="dropdown-center">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown"
                  data-bs-display="static" aria-expanded="false">
                  Course Type
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <div class="dropdown-item">Name</div>
                  </li>
                  <li>
                    <div class="dropdown-item">Date</div>
                  </li>
                  <li>
                    <div class="dropdown-item">Rating</div>
                  </li>
                </ul>
              </div>

              <div class="dropdown-center">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown"
                  data-bs-display="static" aria-expanded="false">
                  Period
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <div class="dropdown-item">Name</div>
                  </li>
                  <li>
                    <div class="dropdown-item">Date</div>
                  </li>
                  <li>
                    <div class="dropdown-item">Rating</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- COURSES -->
          <div class="row">
            <div class="col-lg-3 col-6">
              <div class="p-2">
                <div class="card">
                  <img src="../../../public/Images/4956898_2592288.svg"
                    class="card-img-top w-100" alt="gg">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                      up
                      the bulk of the card's content.</p>
                    <router-link to="/single-course" class="btn btn-warning">Go somewhere</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="p-2">
                <div class="card">
                  <img src="../../../public/Images/sadasd.svg"
                    class="card-img-top w-100" alt="gg">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                      up
                      the bulk of the card's content.</p>
                    <router-link to="/single-course" class="btn btn-warning">Go somewhere</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="p-2">
                <div class="card">
                  <img src="../../../public/Images/5483080_2844250.svg"
                    class="card-img-top w-100" alt="gg">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                      up
                      the bulk of the card's content.</p>
                    <router-link to="/single-course" class="btn btn-warning">Go somewhere</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-6">
              <div class="p-2">
                <div class="card">
                  <img src="../../../public/Images/5359381_2788522.jpg"
                    class="card-img-top w-100" alt="gg">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make
                      up
                      the bulk of the card's content.</p>
                    <router-link to="/single-course" class="btn btn-warning">Go somewhere</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END COURSES -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CoursesPage',
};
</script>