import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarClassroomSiswa from "./SidebarClassroomSiswa";
import  DataLiveSiswa  from "./Data/DataLiveSiswa";

const ClassroomSiswaLive = () => {
  return (
    <SidebarClassroomSiswa>
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
                      {DataLiveSiswa.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <img
                              src={item.image}
                              class="card-img mb-3 mt-3 px-3"
                              alt="cover"
                            ></img>
                          </td>
                          <td>{item.tema}</td>
                          <td>{item.timeStart}</td>
                          <td>{item.timeEnd}</td>
                          <td>{item.eventStart}</td>
                          <td>
                            <span class="small badge badge-pill badge-success">
                              {item.status}
                            </span>
                          </td>
                          <td>
                            <Link
                              to={`/classroom/user/live-streaming-siswa/live-streaming-id/${item.id}`}
                              class="btn btn-primary d-flex align-items-center justify-content-center p-1 form-control"
                            >
                              <i class="las la-angle-right" title="Detail"></i>
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
    </SidebarClassroomSiswa>
  );
};

export default ClassroomSiswaLive;
