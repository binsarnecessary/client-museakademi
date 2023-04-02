import React from 'react'
import { Link } from "react-router-dom";
import DataJadwalSesi from '../ClassroomSiswa/Data/DataSesi';
import SidebarClassroomMentor from './SidebarClassroomMentor';


const ClassroomSiswaSesiKursus = () => {
  return (
    <SidebarClassroomMentor>
    <div className='container'>
        <div className='row'>  
            <div className='col-12 col-lg-10'>
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
                                  <th className='text-center'>Sesi</th>
                                  <th width="50%" className='text-left'>Judul</th>
                                  <th width="40%" className='text-left'>Opsi</th>
                                </tr>
                              </thead>
                              {DataJadwalSesi.map((item) => (
                              <tbody key={item.id}>
                                <tr>
                                  <td>
                                  Sesi {item.id} 
                                  </td>
                                  <td className='justify-content-center'>{item.sesi}</td>
                                  <td><Link to={`/mentor/classroom/sesi-kursus/sesi-kursus-id/${item.id}`} className='btn btn-primary'>Masuk</Link></td>
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