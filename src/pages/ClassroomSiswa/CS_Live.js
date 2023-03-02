import React from "react";
import Pik1 from "../../assets/image/Pikt1.jpg";
import Pik2 from "../../assets/image/Pikt2.jpg";
import { Link } from "react-router-dom";
import CS_Sidebar2 from "./CS_Sidebar2";

const CS_Live = () => {
  return (
    <CS_Sidebar2>
      <div className="container-fluid mb-5 mt-3">
        <div className="row">
          <div className="col-12 col-lg-10 mb-3">
            <h3>Live Classes</h3>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="pills-all-tab"
                  data-toggle="pill"
                  href="#pills-all"
                  role="tab"
                  aria-selected="true"
                >
                  Jadwal Live Class
                </a>
              </li>
            </ul>
          </div>
        </div>
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
    </CS_Sidebar2>
  );
};

export default CS_Live;
