import React from "react";
import "../../assets/css/bootstrap.css";
import "../../assets/css/style.css";

const CS_card1 = () => {
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
            <tr className="">
              <td>
                Pengenalan UI/UX Design Aplication <br></br>
                <p className="small">
                  Lorem ipsum dolor sit amet. Sit eligendi veritatis{" "}
                </p>
              </td>
              <td>Jumat, 24 Juli 2020</td>
              <td>14.00-16.00 WIB</td>
              <td>
                <span class="badge badge-pill badge-success">
                  <small>Selesai</small>
                </span>
              </td>
            </tr>

            <tr className="">
              <td>
                Pengenalan UI/UX Design Aplication <br></br>
                <p className="small">
                  Lorem ipsum dolor sit amet. Sit eligendi veritatis{" "}
                </p>
              </td>
              <td>Jumat, 24 Juli 2020</td>
              <td>14.00-16.00 WIB</td>
              <td>
                <span class="badge badge-pill badge-warning">
                  <small>Tidak hadir</small>
                </span>
              </td>
            </tr>
          </tbody>
        </div>
        <div className="row justify-content-center">
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default CS_card1;
