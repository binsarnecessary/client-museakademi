import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import CS_Sidebar3 from "./CS_Sidebar3";

const CM_Live = () => {
  return (
    <>
      <CS_Sidebar3>
        <div className="container-fluid mb-2">
          <div className="row mt-lg-3">
            <div className="col-12 col-lg-10 mb-3">
              <h3>Live Classes</h3>
            </div>
            <div className="col-12 col-lg-2 d-none d-sm-block">
              <a className="btn btn-primary btn-block">
                <i className="las la-reply mr-2"></i>
                <span>Kembali</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <span>
                <b>Buat Jadwal Live Clasess</b>
              </span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-10 form-group">
                  <div className="small text-muted mb-2">Tema/Judul</div>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-5 form-group">
                  <label className="small text-muted">Waktu Mulai</label>
                  <input type="time" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-5 form-group">
                  <label className="small text-muted">Waktu Selesai</label>
                  <input type="time" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-10 form-group">
                  <div className="small text-muted mb-2">Tanggal</div>
                  <input type="date" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-10 form-group">
                  <div className="small text-muted mb-2">Gambar</div>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                  ></input>
                </div>

                <div className="col-12 col-lg-10 form-group">
                  <div className="small text-muted mb-2">Information</div>
                  <textarea
                    class="form-control"
                    id="textAreaExample1"
                    rows="4"
                  ></textarea>
                </div>
                <div class="col-12 d-none d-sm-block">
                  <a class="btn btn-danger btn-sm float-left text-color-primary">
                    Create
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <span>
                <b>Jadwal Live Clasess</b>
              </span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="table-responsive mx-3">
                  <thead className="small text-muted">
                    <tr>
                      <td width="25%">Tema</td>
                      <td width="15%">Waktu Mulai</td>
                      <td width="15%">Waktu Selesai</td>
                      <td width="20%">Tanggal</td>
                      <td width="15%">Status</td>
                      <td width="10%">Delete</td>
                      <td width="10%">Detail</td>
                    </tr>
                  </thead>
                  <tbody height="150px">
                    <tr>
                      <td>New Learning Page</td>
                      <td>09 - 00</td>
                      <td>11 - 30</td>
                      <td>15 Desember 2022</td>
                      <td>
                        <span class="badge badge-pill badge-success">
                          Selesai
                        </span>
                      </td>
                      <td>
                        <a className="btn btn-danger">
                          <FaTrashAlt />
                        </a>
                      </td>
                      <td>
                        <Link to="/live3_mentor" className="btn btn-success">
                          <HiDotsHorizontal />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>New Learning Page</td>
                      <td>09 - 00</td>
                      <td>11 - 30</td>
                      <td>15 Desember 2022</td>
                      <td>
                        <span class="badge badge-pill badge-success">
                          Selesai
                        </span>
                      </td>
                      <td>
                        <a className="btn btn-danger">
                          <FaTrashAlt />
                        </a>
                      </td>
                      <td>
                        <Link to="/live3_mentor" className="btn btn-success">
                          <HiDotsHorizontal />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>New Learning Page</td>
                      <td>09 - 00</td>
                      <td>11 - 30</td>
                      <td>15 Desember 2022</td>
                      <td>
                        <span class="badge badge-pill badge-success">
                          Selesai
                        </span>
                      </td>
                      <td>
                        <a className="btn btn-danger">
                          <FaTrashAlt />
                        </a>
                      </td>
                      <td>
                        <Link to="/live3_mentor" className="btn btn-success">
                          <HiDotsHorizontal />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CS_Sidebar3>
    </>
  );
};

export default CM_Live;
