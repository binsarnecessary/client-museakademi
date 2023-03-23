import React from "react";
import { Link } from "react-router-dom";
import DataSiswa from "../ClassroomSiswa/Data/DataSiswa";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorSiswa = () => {
  return (
    <>
      <SidebarClassroomMentor>
        <div className="container-fluid mt-3">
          <div className="row">
            <h4>Siswa</h4>
            <div className="col-12 mb-5">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span className="text-muted">Daftar Siswa</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <form action="">
                        <div class="row no-gutters">
                          <div class="col-12 col-lg-6 pr-4">
                            <div class="form-group">
                              <div class="input-group">
                                <input
                                  class="form-control"
                                  type="search"
                                  aria-label="search-input"
                                  placeholder="Pencarian"
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div class="col-4 col-lg-2 pr-4">
                            <div class="form-group">
                              <select
                                name="tampilkan"
                                class="form-control text-muted"
                              >
                                <option value="status">Semua</option>
                                <option value="1">10</option>
                                <option value="2">25</option>
                                <option value="3">50</option>
                                <option value="4">100</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="card col-12">
                      <div className="card-header">
                        <div className="table-responsive">
                          <thead>
                            <tr className="small text-muted">
                              <td width="10%">No</td>
                              <td width="25%">Nama Siswa</td>
                              <td width="25%">Telepon</td>
                              <td width="20%">Bergabung Pada</td>
                              <td width="20%">Nilai Keseluruhan</td>
                              <td width="10%">Opsi</td>
                            </tr>
                          </thead>
                          <tbody height="200px">
                            {DataSiswa.map((item) => (
                            <tr className="">
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.phone}</td>
                              <td>{item.joinStart}</td>
                              <td>{item.grade}</td>
                              <td>
                                <Link
                                  to="/mentor/classroom/siswa-mentor/penilaian"
                                  class="small badge badge-pill badge-primary"
                                >
                                  Nilai
                                </Link>
                              </td>
                            </tr>
                            ))}
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
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorSiswa;
