import React from 'react'
import { Link } from 'react-router-dom'
import SidebarClassroomMentor from './SidebarClassroomMentor'

const ClassroomMentorUpdateNilai = () => {
  return (
    <SidebarClassroomMentor>
        <div className='container-fluid'>
            <div className='row mt-lg-3'>
                <div className='col-12 col-lg-10 mb-3'>
                    <h3>Update Nilai</h3>
                </div>
                <div className="col-12 col-lg-2 d-none d-sm-block">
                    <Link
                        to="/mentor/classroom/siswa-mentor/penilaian"
                        className="btn btn-primary btn-block"
                    >
                        <i className="las la-reply mr-2"></i>
                        <span>Kembali</span>
                    </Link>
                </div>
                <div className='col-12'>
                <div className='card mt-3'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span><b>Input Nilai</b></span>
                            </div>
                            <div className='card-body'>
                                <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>Tugas Ke :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" className='form-control'></input>
                                </div>
                                </div>
                                <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>Judul :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="text" className='form-control'></input>
                                </div>
                                </div>
                                <div className='row mb-3'>
                                <div className='col-10 col-lg-2'>
                                    <span>Nilai :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" className='form-control'></input>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-10 col-lg-2'>
                                    <Link className='btn btn-danger'>Update</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </SidebarClassroomMentor>
  )
}

export default ClassroomMentorUpdateNilai