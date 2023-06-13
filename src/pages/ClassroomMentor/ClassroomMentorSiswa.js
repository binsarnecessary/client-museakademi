import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import items from "../ClassroomSiswa/Data/DataKursus";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorSiswa = () => {
const [search, setSearch] = useState('')
const { kursus } = useParams();
const data = items.find(p => p.kursus === kursus);
  return (
    <>
      <SidebarClassroomMentor>
        <div key={data.kursus} className="container-fluid mt-3">
          <div className="row">
            <h4>Siswa</h4>
            <div className="col-12 mb-5 mt-3">
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
                                  onChange={(e) => setSearch(e.target.value)}
                                  type="search"
                                  aria-label="search-input"
                                  placeholder="Pencarian"
                                ></input>
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </form>
                    </div>

                    <div className="card col-12">
                      <div className="card-header">
                        <div className="table table-responsive">
                          <thead className="thead-light">
                            <tr className="small text-muted">
                              <th width="5%">No</th>
                              <th width="35%">Nama Siswa</th>
                              <th width="30%">Telepon</th>
                              <th width="30%">Bergabung Pada</th>
                              <th width="10%">Opsi</th>
                            </tr>
                          </thead>
                          <tbody height="300px">
                            {data.siswa.filter((item) => {
                              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
                            }).map((item) => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.phone}</td>
                              <td>{item.joinStart}</td>
                              <td>
                                <Link
                                  to={`/mentor/classroom/siswa-mentor/${data.kursus}/${item.id}`}
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
