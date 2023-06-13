import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import { default as data } from "../ClassroomSiswa/Data/DataKursus";
import { FaCalendarAlt } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";

const CardJadwalClassroomMentor = () => {
  const { kursus } = useParams();
  const item = data.find(p => p.kursus === kursus);
  return (
    <div key={item.kursus} className="card mt-3">
      <div className="card-body">
        <div className="table table-responsive">
          <thead className="thead-light">
            <tr className="text-muted">
              <th></th>
              <th>Sesi Kursus</th>

            </tr>
          </thead>
          <tbody height="100px">
            {item.sesiKursus.map((sesiKursus) => (
            <tr className="">
              <td className="text-primary la-2x"><BsCalendar3/></td>
              <td>
                  {sesiKursus.nameSesi}<br></br>
                <p className="small text-primary">
                  {sesiKursus.deskripsi}
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
