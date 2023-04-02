import React from "react";

import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import LogoKategori1 from "../../assets/image/KategoriCourse1.png";
import "./DashboardUser.css";
import { Link, useParams } from "react-router-dom";
import dataKursus from "../ClassroomSiswa/Data/DataKursus"
import SideDashboardJadwalKursusSiswa from "./SideDashboardJadwalKursusSiswa";

function DashboardUser() {
  return (
    <>
      <Navbar />
      <div class="container mb-5 mt-5">
        <div class="row mt-lg-4">
          <div id="header-dashboard" class="col-12 mt-3">
            <h3>Dashboard Siswa</h3>
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
              <div class="statistic-col card">
                <div class="statistic-item">
                  <i class="las la-briefcase text-primary"></i>
                  <div>
                    <h4>0</h4>
                    <span class="text-muted">Kursus Selesai</span>
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
                        </div>
                      </a>
                      
                      <div class="mt-4">
                        <table class="table table-responsive">
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
                              <th
                                scope="col"
                                class="text-left font-weight-normal"
                              >Sertifikat</th>
                            </tr>
                          </thead>
                          {dataKursus.map((item)=>(
                          <tbody>
                            <tr>
                              <td class="text-left">
                                {item.kursus}
                              </td>
                              <td class="text-center">{item.kursusStart}</td>
                              <td class="text-right">{item.kursusEnd}</td>
                              <td class="text-center text-primary"><a href={item.sertifikat}><i class="las la-certificate la-2x"></i></a></td>
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
            
              <SideDashboardJadwalKursusSiswa/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardUser;
