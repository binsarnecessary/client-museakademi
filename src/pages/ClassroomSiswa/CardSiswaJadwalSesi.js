import React from "react";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import { BsCalendar3 } from "react-icons/bs";
import items from "./Data/DataKursus"
import { useParams } from "react-router-dom";

const CardSiswaJadwalSesi = () => {
  const { kursus } = useParams();
  const item = items.find(p => p.kursus === kursus);
  return (
    <div className="row">
      <div key={item.kursus} className="col-12 col-lg-12">
    <div className="card mt-3">
      <div className="card-header card-header d-flex align-items-center justify-content-between">
        <span>Sesi Kursus</span>
      </div>
      <div className="card-body">
        <div className="table table-responsive">
          <tbody height="100px">
            {item.sesiKursus.map((sesiKursus)=>(
            <tr>
              <td className="text-primary la-2x"><BsCalendar3/></td>
              <td>
                {sesiKursus.nameSesi} <br></br>
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
    </div>
    </div>
  );
};

export default CardSiswaJadwalSesi;
