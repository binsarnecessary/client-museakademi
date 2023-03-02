import React from "react";
import Footer from "../../components/common/Footer";
import NavbarComp from "../../components/profileMentor/NavbarComp";
import "../../assets/css/bootstrapProfileMentor.css";
import { Dropdown } from "react-bootstrap";
import "../../assets/css/styleProfileMentor.css";

function KursusMentor() {
  return (
    <>
      <NavbarComp />
      <body>
        <div id="user-courses" class="container mb-5 mt-5">
          <div class="row mt-lg-5">
            <div class="col-12 mb-3 mt-5">
              <h5>Kursus Saya</h5>
              <p class="small text-muted">
                Kursus yang Anda bimbing akan tersimpan pada halaman ini
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <a>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ flex: 1 }}>
                    <input
                      type="search"
                      name="cari-kursus"
                      class="form-control bg-white search-kursus"
                      placeholder="Pencarian"
                    ></input>
                  </div>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        Pilih Status
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="my-custom-dropdwon">
                        <Dropdown.Item href="#/action-1">Semua</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Aktif</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Selesai</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Akan Datang
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </a>
              <div class="row mt-2">
                <div class="col-12 mb-3">
                  <div class="card">
                    <div class="card-body">
                      <div id="card">
                        <div
                          style={{ display: "flex", alignItems: "center" }}
                        ></div>
                        <div class="mt-4">
                          <table class="table custom-table">
                            <thead class="thead-white">
                              <tr>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Gambar
                                </th>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Nama Kursus
                                </th>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Jumlah Siswa
                                </th>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Tanggal Mulai
                                </th>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Tanggal Berakhir
                                </th>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  class="text-left font-weight-normal"
                                >
                                  Opsi
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default KursusMentor;
