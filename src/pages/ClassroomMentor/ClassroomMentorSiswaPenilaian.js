import React from "react";
import { Link } from "react-router-dom";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorSiswaPenilaian = () => {
  return (
    <>
      <SidebarClassroomMentor>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-12 col-lg-10 mb-3">
              <h3>Penilaian</h3>
            </div>
            <div className="col-12 col-lg-2 d-none d-sm-block">
              <Link
                to="/mentor/classroom/siswa-mentor"
                className="btn btn-primary btn-block"
              >
                <i className="las la-reply mr-2"></i>
                <span>Kembali</span>
              </Link>
            </div>
            <div className="col-12 mb-5">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span className="text-muted">
                    Hasil Pengerjaan Tugas <span>(Munir)</span>
                  </span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="table-responsive mx-3">
                      <thead>
                        <tr className="small text-muted">
                          <td width="15%">Mentor</td>
                          <td width="10%">Manajemen</td>
                          <td width="10%">Kreativitas</td>
                          <td width="10%">Analisa</td>
                          <td width="10%">Komunikasi</td>
                          <td width="10%">Desain</td>
                          <td width="10%">Logika</td>
                        </tr>
                      </thead>
                      <tbody className="small" height="150px">
                        <tr>
                          <td>Eris Dwi Septiawan</td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="form-control shadow-sm"
                              placeholder="0 - 100"
                            ></input>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="form-control shadow-sm"
                              placeholder="0 - 100"
                            ></input>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="form-control shadow-sm"
                              placeholder="0 - 100"
                            ></input>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="form-control shadow-sm"
                              placeholder="0 - 100"
                            ></input>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="form-control shadow-sm"
                              placeholder="0 - 100"
                            ></input>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              max="100"
                              className="form-control shadow-sm"
                              placeholder="0 - 100"
                            ></input>
                          </td>
                        </tr>
                        <tr>
                          <td>Ivan Reynaldi Putra</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                          <td>-</td>
                        </tr>
                        <tr>
                          <td>M. Fandi Arfabuma</td>
                          <td>95</td>
                          <td>95</td>
                          <td>95</td>
                          <td>90</td>
                          <td>90</td>
                          <td>90</td>
                        </tr>
                      </tbody>
                    </div>
                    <div class="col-12 d-none d-sm-block mt-3">
                      <a class="btn btn-primary btn-sm float-left text-color-primary">
                        Simpan Perubahan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorSiswaPenilaian;
