import React from "react";
import { Link } from "react-router-dom";
import CS_Sidebar3 from "./CS_Sidebar3";

const CM_TugasEdit = () => {
  return (
    <>
      <CS_Sidebar3>
        <div className="container-fluid">
          <div className="row mt-lg-3">
            <div className="col-12 col-lg-10 mb-3">
              <h3>Edit Tugas & Evaluasi</h3>
            </div>
            <div className="col-12 col-lg-2 d-none d-sm-block">
              <Link to="/tugas_mentor" className="btn btn-primary btn-block">
                <i className="las la-reply mr-2"></i>
                <span>Kembali</span>
              </Link>
            </div>
            <div className="col-12 mb-5">
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span>Edit Tugas & Evaluasi</span>
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
          </div>
        </div>
      </CS_Sidebar3>
    </>
  );
};

export default CM_TugasEdit;
