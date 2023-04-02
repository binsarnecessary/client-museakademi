import React from 'react'
import { Link } from "react-router-dom";
import DataJadwalSesi from './Data/DataSesi';
import SidebarClassroomSiswa from './SidebarClassroomSiswa';


const ClassroomSiswaSesiKursus = () => {
  return (
    <SidebarClassroomSiswa>
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
                              <tbody>
                                <tr>
                                  <td>
                                  Sesi {item.id} 
                                  </td>
                                  <td className='justify-content-center'>{item.sesi}</td>
                                  <td><Link to={`/classroom/user/sesi-kursus/sesi-kursus-id/${item.id}`} className='btn btn-success'>Masuk</Link></td>
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
    </SidebarClassroomSiswa>
  );
};

export default ClassroomSiswaSesiKursus