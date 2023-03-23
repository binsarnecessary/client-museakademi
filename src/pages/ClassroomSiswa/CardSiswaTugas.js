import React from "react";
import { DataTugas } from "./Data/DataTugas";

const CardSiswaTugas = () => {
  return (
    <div className="row">
      {DataTugas.map((item) => (
      <div className="col-12 mb-5">
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <span>Tugas & Evaluasi</span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive mb-3">
                  <thead>
                    <tr className="small text-muted">
                      <td width="60%">Judul</td>
                      <td width="25%">Mulai</td>
                      <td width="25%">Selesai</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>{item.judul}</b>
                      </td>
                      <td>{item.mulai}<p>{item.waktuMulai}</p></td>
                      <td>{item.selesai}<p>{item.waktuMulai}</p></td>
                    </tr>
                  </tbody>
                </div>
                <div className="table-responsive">
                  <thead>
                    <tr className="small text-muted">
                      <td>Petunjuk</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Untuk membuka tugas yang telah diberikan silahkan klik
                        open untuk membukanya
                      </td>
                    </tr>
                  </tbody>
                </div>
                <a class="btn btn-danger btn-sm float-left mt-3">Open</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default CardSiswaTugas;
