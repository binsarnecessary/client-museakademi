import React from 'react'
import data from './Data/DataKursus'
import musebg from '../../assets/image/muselogo.png'
import SidebarClassroomSiswa from './SidebarClassroomSiswa'
import { useParams } from 'react-router-dom'

const ClassroomSiswaNilai = () => {
  const { kursus } = useParams();
  const item = data.find(p => p.kursus === kursus);
  return (
    <SidebarClassroomSiswa>
    <div className='container-fluid mt-2'>
    
        <div className='row'>
            
            <div className='col-12 mb-2'>
                <h4>Nilai Tugas & Evaluasi</h4>
            </div>
        </div>
        <div className='row mt-lg-3'>
            {/*
            <div className='col-12 col-lg-4 order-lg-2 mb-3 card'>
                <div className='right-side mt-3 mb-3'>
                    <img
                        id='imgcover'
                        src={musebg}
                        width='100%'
                        className='mb-3'
                    ></img>
                    <button className='btn btn-danger btn-block btn-lg'>Skor Evaluasi</button>
                    <p className='align-center' style={{textAlign: 'center', fontSize: '70px'}}><b>56</b></p>
                </div>
  </div> */}
            <div className='col-12 col-lg-12 order-lg-1'>

                <div className='card mb-3'>
                    <div className='card-header d-flex justify-content-between'>
                        <span><b>Tugas & Evaluasi</b></span>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-12 col-lg-12'>
                                <div className='table custom-table mb-2'>
                                    <thead className='thead-light'>
                                        <tr>
                                            <th width="90%" clasName="text-center">Judul</th>
                                            <th width="20%">Nilai</th>
                                        </tr>
                                    </thead>
                                    {item.nilai.map((item) => (
                                    <tbody style={{fontSize: '15px'}}>
                                        <tr>
                                            <td>{item.judul}</td>
                                            <td>{item.grade}</td>
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
  )
}

export default ClassroomSiswaNilai