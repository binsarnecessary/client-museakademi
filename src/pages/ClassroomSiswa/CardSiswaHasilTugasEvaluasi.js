import React from "react";

const CardSiswaHasilTugasEvaluasi = () => {
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
              <tr>
                <td>Eris Dwi Septiawan Rizal</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Ivan Reynaldi Putra</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>M. Fandi Arfabuma</td>
                <td>95</td>
                <td>95</td>
                <td>95</td>
                <td>90</td>
                <td>90</td>
                <td>90</td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSiswaHasilTugasEvaluasi;
