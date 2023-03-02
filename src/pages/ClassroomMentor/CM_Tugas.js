import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import CS_Sidebar3 from "./CS_Sidebar3";

const CM_Tugas = () => {
  return (
    <>
      <CS_Sidebar3>
        <div className="container-fluid">
          <div className="row mt-lg-3">
            <div className="col-12 mb-5">
              <h4 className="mb-3">Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span>Buat Tugas & Evaluasi</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Link</label>
                      <input type="text" className="form-control"></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Judul</label>
                      <input type="text" className="form-control"></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-muted">Lama Pengerjaan</label>
                      <input type="time" className="form-control"></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-white">j</label>
                      <input type="time" className="form-control"></input>
                    </div>
                    <div class="col-12 d-none d-sm-block">
                      <a class="btn btn-danger btn-sm float-left text-color-primary">
                        Save
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <h4 className="mb-3">Riwayat Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <thead>
                      <tr className="small text-muted">
                        <td width="40%">Judul</td>
                        <td width="25%">Mulai</td>
                        <td width="25%">Selesai</td>
                        <td width="10%">Edit</td>
                        <td width="10%">Delete</td>
                      </tr>
                    </thead>
                    <tbody height="150px">
                      <tr>
                        <td>Pendahuluan Teknik UI/UX</td>
                        <td>29 Desember 2022</td>
                        <td>29 Desember 2022</td>
                        <td>
                          <Link to="/tugasedit_mentor" className="btn btn-success">
                            <FaEdit />
                          </Link>
                        </td>
                        <td>
                          <a className="btn btn-danger">
                            <FaTrashAlt />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Pengembangan Teknik UI/UX</td>
                        <td>29 Desember 2022</td>
                        <td>29 Desember 2022</td>
                        <td>
                          <a className="btn btn-success">
                            <FaEdit />
                          </a>
                        </td>
                        <td>
                          <a className="btn btn-danger">
                            <FaTrashAlt />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>Praktek Teknik UI/UX</td>
                        <td>29 Desember 2022</td>
                        <td>29 Desember 2022</td>
                        <td>
                          <a className="btn btn-success">
                            <FaEdit />
                          </a>
                        </td>
                        <td>
                          <a className="btn btn-danger">
                            <FaTrashAlt />
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
      </CS_Sidebar3>
    </>
  );
};

export default CM_Tugas;
