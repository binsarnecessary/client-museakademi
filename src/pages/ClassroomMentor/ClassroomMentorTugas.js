import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import { DataTugas } from "../ClassroomSiswa/Data/DataTugas";

const ClassroomMentorTugas = () => {
  return (
    <>
      <SidebarClassroomMentor>
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
                      {DataTugas.map((item) => (
                      <tr>
                        <td>{item.judul}</td>
                        <td>{item.mulai} {item.waktuMulai}</td>
                        <td>{item.selesai} {item.waktuSelesai} </td>
                        <td>
                          <Link
                            to="/mentor/classroom/tugas-mentor/mentor-edit-tugas"
                            className="btn btn-success"
                          >
                            <FaEdit />
                          </Link>
                        </td>
                        <td>
                          <a className="btn btn-danger">
                            <FaTrashAlt />
                          </a>
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
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorTugas;
