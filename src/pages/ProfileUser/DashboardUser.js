import React from "react";
import Footer from "../../components/common/Footer";
import KategoriCourse1 from "../../assets/image/KategoriCourse1.png";
import Dashboard from "../../assets/css/dashboard.css";
import { Navbar, Nav } from "react-bootstrap";
import NavbarCompUser from "../../components/profileMentor/NavbarCompUser";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../assets/css/styleProfileMentor.css";
import "../../assets/css/ProfileStyling.css";

function DashboardUser() {
  return (
    <>
      <NavbarCompUser />
      <div class="container mb-5 mt-5">
        <div class="row mt-lg-4 ">
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
                  <img class="mr-3" src={KategoriCourse1} />
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Kursus Aktif</span>
                  </div>
                </div>
              </div>
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"></i>
                  <img class="mr-3" src={KategoriCourse1} />
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Total Kursus</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="statistic-row my-2">
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"> </i>
                  <img class="mr-3" src={KategoriCourse1} />
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Kursus Selesai</span>
                  </div>
                </div>
              </div>
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"></i>
                  <img class="mr-3" src={KategoriCourse1} />
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Total Siswa</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-2">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div id="card">
                      <a>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div style={{ flex: 1 }}>
                            Kursus yang telah selesai
                          </div>
                          <div>
                            <button className="btn-dashboard">
                              Buat Jadwal
                            </button>
                          </div>
                        </div>
                      </a>
                      <div class="mt-4">
                        <table class="table custom-table">
                          <thead class="thead-light">
                            <tr>
                              <th
                                scope="col"
                                class="text-left font-weight-normal"
                              >
                                Nama Kursus
                              </th>
                              <th
                                scope="col"
                                class="text-center font-weight-normal"
                              >
                                Tanggal Mulai
                              </th>
                              <th
                                scope="col"
                                class="text-right font-weight-normal"
                              >
                                Tanggal Berakhir
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-left font-">
                                Sistem Informasi - UI/UX Design Applications
                              </td>
                              <td class="text-center">2022-03-01</td>
                              <td class="text-right">2022-03-31</td>
                            </tr>
                            <tr>
                              <td class="text-left">
                                Sistem Informasi - UI/UX Design Applications
                              </td>
                              <td class="text-center">2022-04-01</td>
                              <td class="text-right">2022-04-30</td>
                            </tr>
                            <tr>
                              <td class="text-left">
                                Sistem Informasi - UI/UX Design Applications
                              </td>
                              <td class="text-center">2022-05-01</td>
                              <td class="text-right">2022-05-31</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
                    <img class="mr-3" src={KategoriCourse1} />
                    <div>
                      <span>
                        <a href="" class="schedule-course-title">
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
                    <img class="mr-3" src={KategoriCourse1} />
                    <div>
                      <span>
                        <a href="" class="schedule-course-title">
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
                    <img class="mr-3" src={KategoriCourse1} />
                    <div>
                      <span>
                        <a href="" class="schedule-course-title">
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
                    <img class="mr-3" src={KategoriCourse1} />
                    <div>
                      <span>
                        <a href="" class="schedule-course-title">
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
                    <img class="mr-3" src={KategoriCourse1} />
                    <div>
                      <span>
                        <a href="" class="schedule-course-title">
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
