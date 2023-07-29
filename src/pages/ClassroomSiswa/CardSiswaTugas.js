import React, { useState, useEffect } from "react";
import items from "./Data/DataKursus";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from 'date-fns';
import id from 'date-fns/locale/id';

const CardSiswaTugas = () => {
  /* const { kursus } = useParams();
  const item = items.find(p => p.kursus === kursus); */

  const { itemId } = useParams();
  const [tugas, setTugas] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentTugasRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/tugas/course/${itemId}`
        );

        const currentTugasResponse = currentTugasRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

        if (currentTugasResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setTugas(currentTugasResponse.data.tugas);
        }
      } catch (err) {
        setTugas(false);
      }
    };

    fetchData();
  }, []);

  console.log(tugas)
  return tugas.map(tugas=> {
    return (
      <div  className="row">
        <div className="col-12 mb-2"> 
        <div className="card mb-3">
            <div className="card-header d-flex align-items-center justify-content-between">
              <span>Tugas & Evaluasi</span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-10">
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
                          <b>{tugas.judulTugas}</b>
                        </td>
                        <td>{format(new Date(tugas.tugasStart), 'dd MMMM yyyy HH:mm', { locale: id })}</td>
                        <td>{format(new Date(tugas.tugasEnd), 'dd MMMM yyyy HH:mm', { locale: id })}</td>
                      </tr>
                    </tbody>
                    
                  </div>
                  <div className="table-responsive">
                    <thead>
                      <tr className="small text-muted">
                        <td>Petunjuk Pengerjaan</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {tugas.petunjukPengerjaan}
                        </td>
                      </tr>
                    </tbody>
                  </div>
                  <a href={tugas.linkTugas} target="_blank" class="btn btn-danger btn-sm float-left mt-3">Open</a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
    
      </div>
  );}

  )}

export default CardSiswaTugas;
