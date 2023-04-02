import React from "react";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";
import { default as DataSesi } from "./Data/DataSesi"; 
import { BsCalendar3 } from "react-icons/bs";

const CardSiswaJadwalSesi = () => {
  console.log(DataSesi)
  return (
    <div className="row">
      <div className="col-12 col-lg-12">
    <div className="card mt-3">
      <div className="card-header card-header d-flex align-items-center justify-content-between">
        <span>Sesi</span>
      </div>
      <div className="card-body">
        <div className="table table-responsive">
          <tbody height="100px">
            {DataSesi.map((item) => (
            <tr>
              <td className="text-primary la-2x"><BsCalendar3/></td>
              <td>
                {item.sesi} <br></br>
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
    </div>
    </div>
  );
};

export default CardSiswaJadwalSesi;
