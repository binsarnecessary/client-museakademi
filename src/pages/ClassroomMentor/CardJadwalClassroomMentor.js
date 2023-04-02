import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import { default as DataJadwalSesi } from "../ClassroomSiswa/Data/DataSesi";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const CardJadwalClassroomMentor = () => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="table table-responsive">
          <thead className="thead-light">
            <tr className="text-muted">
              <th></th>
              <th>Sesi Kursus</th>

            </tr>
          </thead>
          <tbody height="100px">
            {DataJadwalSesi.map((item) => (
            <tr className="">
              <td className="text-primary la-2x"><BsCalendar3/></td>
              <td>
                  {item.sesi}<br></br>
                <p className="small text-primary">
                  {item.deskripsi}
                </p>
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
