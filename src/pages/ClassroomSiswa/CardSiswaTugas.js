import React from "react";

const CardSiswaTugas = () => {
  return (
    <div className="row">
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
                      <td width="50%">Judul</td>
                      <td width="20%">Mulai</td>
                      <td width="20%">Selesai</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <b>Pengembangan Teknik UI/UX</b>
                      </td>
                      <td>29 Desember 2022</td>
                      <td>29 Desember 2022</td>
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
    </div>
  );
};

export default CardSiswaTugas;
