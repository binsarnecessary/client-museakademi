import React from "react";
import Footer from "../../components/common/Footer";
import KategoriCourse1 from "../../assets/image/KategoriCourse1.png";
import Navbar from "../../components/common/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../assets/css/styleProfileMentor.css";
import "../../assets/css/ProfileStyling.css";
import { Link, useParams } from "react-router-dom";
import dataKursus from "../ClassroomSiswa/Data/DataKursus"
import SideDashboardJadwalKursusMentor from "./SideDashboardJadwalKursusMentor";


function DashboardMentor() {
  return (
    <>
      <Navbar />
      <div class="container mb-5">
        <div class="row mt-lg-4 ">
          <div id="header-dashboard" class="col-12 mt-5">
            <h3>Dashboard Mentor</h3>
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
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Kursus Aktif</span>
                  </div>
                </div>
              </div>
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"></i>
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
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Kursus Selesai</span>
                  </div>
                </div>
              </div>
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-graduation-cap text-primary"></i>
                  <div>
                    <h4>2</h4>
                    <span class="text-muted">Total Siswa</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-3">
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
                            <Link to={"/mentor/atur-jadwal"} className="btn btn-danger btn-sm">
                              Buat Jadwal
                            </Link>
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
                          {dataKursus.map((item)=>(
                          <tbody>
                            <tr>
                              <td class="text-left font-">
                                {item.kursus}
                              </td>
                              <td class="text-center">{item.kursusStart}</td>
                              <td class="text-right">{item.kursusEnd}</td>
                            </tr>
                          </tbody>
                          ))}
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
            <SideDashboardJadwalKursusMentor/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DashboardMentor;
