import React from "react";
import items from "./Data/DataKursus";
import { useParams } from "react-router-dom";

const CardSiswaTugas = () => {
  const { kursus } = useParams();
  const item = items.find(p => p.kursus === kursus);
  return (
    <div className="row">
   
      <div key={item.kursus} className="col-12 mb-5">
      {item.tugas.map((kursus)=>(
        <div className="card mb-5">
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
                      <td width="30%">Mulai</td>
                      <td width="30%">Selesai</td>
                    </tr>
                  </thead>
                  
                  <tbody>
                    <tr>
                      <td>
                        <b>{kursus.judul}</b>
                      </td>
                      <td>{kursus.dateStart}<p>{kursus.timeStart}</p></td>
                      <td>{kursus.dateEnd}<p>{kursus.timeEnd}</p></td>
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
                <a href={kursus.urlTugas} target="_blank" class="btn btn-danger btn-sm float-left mt-3">Open</a>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    
    </div>
  );
};

export default CardSiswaTugas;
