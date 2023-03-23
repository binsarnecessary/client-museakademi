import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import { DataJadwalSesi } from "../ClassroomSiswa/Data/DataJadwalSesi";

const CardJadwalClassroomMentor = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="table-responsive">
          <thead>
            <tr className="small text-muted">
              <td width="30%">Sesi</td>
              <td width="15%">Tanggal</td>
              <td width="15%">Pukul</td>
              <td width="5%">Status</td>
            </tr>
          </thead>
          <tbody height="100px">
            {DataJadwalSesi.map((item) => (
            <tr className="">
              <td>
                  {item.sesi}<br></br>
                <p className="small">
                  {item.deskripsi}
                </p>
              </td>
              <td>{item.tanggal}</td>
              <td>{item.timeStart} - {item.timeEnd}</td>
              <td>
                <span class="badge badge-pill badge-success">
                  <small>{item.status}</small>
                </span>
              </td>
            </tr>
            ))}
          </tbody>
        </div>
        <div className="row justify-content-center">
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default CardJadwalClassroomMentor;