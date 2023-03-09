import React from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import LogoKategori1 from "../../assets/image/KategoriCourse1.png";
import "./DashboardUser.css";

function DashboardUser() {
  return (
    <>
      <Navbar />
      <div class="container mb-5">
        <div class="row mt-lg-4">
          <div id="header-dashboard" class="col-12 my-5">
            <h5>Dashboard</h5>
            <p>
              Hai, Sambo! <span v-html="selectedSmiley"></span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-7">
            <span class="text-muted">
              <small>Statistik Kursus</small>
            </span>
            <div class="statistic-row my-2">
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"> </i>
                  <img class="mr-3" src={LogoKategori1} />
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Kursus Aktif</span>
                  </div>
                </div>
              </div>
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"></i>
                  <img class="mr-3" src={LogoKategori1} />
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Total Kursus</span>
                  </div>
                </div>
              </div>
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"></i>
                  <img class="mr-3" src={LogoKategori1} />
                  <div>
                    <h4>0</h4>
                    <span class="text-muted">Kursus Selesai</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div id="chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <span class="text-muted small">Jadwal Kursus</span>
            <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="schedule-course-item">
                    <i class="las la-calendar-day text-primary"></i>
                    <img class="mr-3" src={LogoKategori1} />
                    <div>
                      <span>
                        <a href="/classroom/user" class="schedule-course-title">
                          Multimedia
                        </a>{" "}
                        <br />
                        <span class="small">Senin, 3 Januari 2023</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>14.00 - 16.00</span>
                        <span>
                          <i class="las la-user-tie"></i>Nurhadi
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="schedule-course-item">
                    <i class="las la-calendar-day text-primary"></i>
                    <img class="mr-3" src={LogoKategori1} />
                    <div>
                      <span>
                        <a href="/classroom/user" class="schedule-course-title">
                          Multimedia
                        </a>{" "}
                        <br />
                        <span class="small">Senin, 3 Januari 2023</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>14.00 - 16.00</span>
                        <span>
                          <i class="las la-user-tie"></i>Nurhadi
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="schedule-course-item">
                    <i class="las la-calendar-day text-primary"></i>
                    <img class="mr-3" src={LogoKategori1} />
                    <div>
                      <span>
                        <a href="/classroom/user" class="schedule-course-title">
                          Multimedia
                        </a>{" "}
                        <br />
                        <span class="small">Senin, 3 Januari 2023</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>14.00 - 16.00</span>
                        <span>
                          <i class="las la-user-tie"></i>Nurhadi
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="schedule-course-item">
                    <i class="las la-calendar-day text-primary"></i>
                    <img class="mr-3" src={LogoKategori1} />
                    <div>
                      <span>
                        <a href="/classroom/user" class="schedule-course-title">
                          Multimedia
                        </a>{" "}
                        <br />
                        <span class="small">Senin, 3 Januari 2023</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>14.00 - 16.00</span>
                        <span>
                          <i class="las la-user-tie"></i>Nurhadi
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="schedule-course-item">
                    <i class="las la-calendar-day text-primary"></i>
                    <img class="mr-3" src={LogoKategori1} />
                    <div>
                      <span>
                        <a href="/classroom/user" class="schedule-course-title">
                          Multimedia
                        </a>{" "}
                        <br />
                        <span class="small">Senin, 3 Januari 2023</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>14.00 - 16.00</span>
                        <span>
                          <i class="las la-user-tie"></i>Nurhadi
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center small py-3">
              <a href="">Muat lebih banyak</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardUser;
