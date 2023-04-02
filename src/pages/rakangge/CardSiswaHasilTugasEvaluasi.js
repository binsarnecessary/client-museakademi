import React from "react";
import { DataHasilTugasEvaluasi } from "./Data/DataHasilTugasEvaluasi";

const CardSiswaHasilTugasEvaluasi = () => {
  console.log(DataHasilTugasEvaluasi)
  return (
    <div className="card mt-3">
      <div className="card-header d-flex align-items-center justify-content-between">
        <span>Hasil Tugas & Evaluasi</span>
      </div>
      <div class="card-body">
        <div class="row">
          <div className="table-responsive">
            <thead>
              <tr className="small text-muted">
                <td width="25%">Mentor</td>
                <td width="15%">Manajemen</td>
                <td width="15%">Kreativitas</td>
                <td width="15%">Analisa</td>
                <td width="15%">Komunikasi</td>
                <td width="15%">Desain</td>
                <td width="15%">Logika</td>
              </tr>
            </thead>
            <tbody>
            {DataHasilTugasEvaluasi.map((item) => (
              <tr>
                <td>{item.mentor}</td>
                <td>{item.manajemen}</td>
                <td>{item.kreativitas}</td>
                <td>{item.analisa}</td>
                <td>{item.komunikasi}</td>
                <td>{item.desain}</td>
                <td>{item.logika}</td>
              </tr>
              ))}
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSiswaHasilTugasEvaluasi;
