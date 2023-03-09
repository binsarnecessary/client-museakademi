import React from "react";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/admin/Navbar";
import "../../assets/css/bootstrapProfileMentor.css";
import { Dropdown } from "react-bootstrap";
import "../../assets/css/styleProfileMentor.css";
import Pik1 from "../../assets/image/Pikt1.jpg";
import Pik2 from "../../assets/image/Pikt2.jpg";
import { Link } from "react-router-dom";

function KursusUser() {
  return (
    <>
      <Navbar />
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
              <div className="row">
          <div className="col-12 mb-5">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive">
                      <thead>
                        <tr className="small text-muted">
                          <td width="15%">Gambar</td>
                          <td width="25%">Tema</td>
                          <td width="15%">Waktu Mulai</td>
                          <td width="15%">Waktu Selesai</td>
                          <td width="15%">Tanggal</td>
                          <td width="15%">Status</td>
                          <td width="15%">Opsi</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={Pik1}
                              class="card-img mb-3 mt-3 px-3"
                              alt="cover"
                            ></img>
                          </td>
                          <td>New Learning Page</td>
                          <td>09 - 00</td>
                          <td>11 - 30</td>
                          <td>15 Desember 2022</td>
                          <td>
                            <span class="small badge badge-pill badge-success">
                              Selesai
                            </span>
                          </td>
                          <td>
                            <Link
                              to="/live2_siswa"
                              class="btn btn-primary d-flex align-items-center justify-content-center p-1 form-control"
                            >
                              <i class="las la-angle-right" title="Detail"></i>
                            </Link>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src={Pik2}
                              class="card-img mb-3 mt-3 px-3"
                              alt="cover"
                            ></img>
                          </td>
                          <td>E-Learning Class </td>
                          <td>09 - 00</td>
                          <td>11 - 30</td>
                          <td>15 Desember 2022</td>
                          <td>
                            <span class="small badge badge-pill badge-warning">
                              Akan datang
                            </span>
                          </td>
                          <td>
                            <a class="btn btn-primary d-flex align-items-center justify-content-center p-1">
                              <i class="las la-angle-right" title="Detail"></i>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src={Pik1}
                              class="card-img mb-3 mt-3 px-3"
                              alt="cover"
                            ></img>
                          </td>
                          <td>New Learning Page</td>
                          <td>09 - 00</td>
                          <td>11 - 30</td>
                          <td>15 Desember 2022</td>
                          <td>
                            <span class="small badge badge-pill badge-success">
                              Selesai
                            </span>
                          </td>
                          <td>
                            <a class="btn btn-primary d-flex align-items-center justify-content-center p-1">
                              <i class="las la-angle-right" title="Detail"></i>
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <img
                              src={Pik2}
                              class="card-img mb-3 mt-3 px-3"
                              alt="cover"
                            ></img>
                          </td>
                          <td>E-Learning Class</td>
                          <td>09 - 00</td>
                          <td>11 - 30</td>
                          <td>15 Desember 2022</td>
                          <td>
                            <span class="small badge badge-pill badge-warning">
                              Akan datang
                            </span>
                          </td>
                          <td>
                            <a class="btn btn-primary d-flex align-items-center justify-content-center p-1">
                              <i class="las la-angle-right" title="Detail"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </div>
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

export default KursusUser;
