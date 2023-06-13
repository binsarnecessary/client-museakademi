import React from 'react'
import { Link, useParams } from "react-router-dom";
import data from '../ClassroomSiswa/Data/DataKursus';
import SidebarClassroomMentor from './SidebarClassroomMentor';


const ClassroomSiswaSesiKursus = () => {
  const { kursus } = useParams();
  const item = data.find(p => p.kursus === kursus);
  return (
    <SidebarClassroomMentor>
    <div className='container-fluid'>
        <div className='row'>  
            <div key={item.kursus} className='col-12 col-lg-12'>
                <h4>Sesi Kursus</h4>
                <div className='card mt-3 mb-5'>
                    <div className='card-header d-flex align-items-center justify-content-between'>
                        <span><b>Sesi Kursus</b></span>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                          <div className='col-12'>
                            <div className='table table-responsive mb-2'>
                              <thead className='thead-light'>
                                <tr>
                                  <th width="5%" className='text-center'>Sesi</th>
                                  <th width="50%" className='text-left'>Judul</th>
                                  <th width="20%" className='text-left'>Opsi</th>
                                </tr>
                              </thead>
                              {item.sesiKursus.map((kursus, index) => (
                              <tbody key={index}>
                                <tr>
                                  <td>
                                  Sesi {kursus.id} 
                                  </td>
                                  <td className='justify-content-center'>{kursus.nameSesi}</td>
                                  <td><Link to={`/mentor/classroom/sesi-kursus/${item.kursus}/${kursus.id}`} className='btn btn-success'>Masuk</Link></td>
                                </tr>
                              </tbody>
                              ))}
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
    </SidebarClassroomMentor>
  );
};

export default ClassroomSiswaSesiKursus