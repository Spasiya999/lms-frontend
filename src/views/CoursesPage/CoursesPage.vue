<template>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row">

        <div class="col-lg-2 col-12 border-end border-3 px-3">

          <h6 class="text-bold fw-bold mb-3">
            Filterd by Categories:
          </h6>

          <div class="dropdown-center mb-2">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
              data-bs-display="static" aria-expanded="false">
              Categories
            </button>
            <ul class="dropdown-menu dropdown-menu-start">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Action two</a></li>
              <li><a class="dropdown-item" href="#">Action three</a></li>
            </ul>
          </div>

          <div class="dropdown-center mb-2">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
              data-bs-display="static" aria-expanded="false">
              Time Period
            </button>
            <ul class="dropdown-menu dropdown-menu-start">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Action two</a></li>
              <li><a class="dropdown-item" href="#">Action three</a></li>
            </ul>
          </div>
        </div>

        <div class="col-lg-10 col-12">
          <div class="row px-3">
            <div class="col-6">
              <h2 class="">Courses list</h2>
            </div>
            <div class="col-6 text-end">
              <div class="dropdown-center">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown"
                  data-bs-display="static" aria-expanded="false">
                  Sort by
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
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
                  <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
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
                  <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
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
                  <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
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
                  <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
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