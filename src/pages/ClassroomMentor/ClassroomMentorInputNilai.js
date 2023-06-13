import React, { useState } from 'react'
import { FaEdit, FaPenSquare, FaTrash } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import {default as items} from '../ClassroomSiswa/Data/DataSiswa'
import SidebarClassroomMentor from './SidebarClassroomMentor'
import Data from '../ClassroomSiswa/Data/DataKursus'

const ClassroomMentorInputNilai = () => {
    const { kursus, id } = useParams();
    const item = Data.find(p => p.kursus === kursus);
    const siswa = item.siswa.find(a => a.id === +id);

    {/*
    const [penilaian, setPenilaian] = useState({
        judul: "",
        nilai: "",
    });
    const [tableData, setTableData] = useState([]);
    const handleChange=(e)=>{
        setPenilaian(
            {
                ...penilaian,
                [e.target.name]: e.target.value,
            }
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTableData([...tableData, penilaian]);
        setPenilaian(
            {
                judul: "",
                nilai: "",
            }
        )
    }

    const handleDelete=(index)=>{
        const filterData=tableData.filter((item,i)=>i!==index)
        setTableData(filterData);
    }
*/}

  return (
    <SidebarClassroomMentor>
        <div key={siswa.id} className='container-fluid'>
            <div className='row mt-lg-3'>
                <div className='col-12 col-lg-10 mb-3'>
                    <h3>Penilaian Siswa</h3>
                </div>
                <div className="col-12 col-lg-2 d-none d-sm-block">
                    <Link
                        to={`/mentor/classroom/siswa-mentor/${item.kursus}`}
                        className="btn btn-primary btn-block"
                    >
                        <i className="las la-reply mr-2"></i>
                        <span>Kembali</span>
                    </Link>
                </div>
                    <div className='col-12'>
                    <div className='card'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span><b>{siswa.name}</b></span>
                            </div>
                            <div className='card-body'>
                                <div className='table table-responsive'>
                                    <thead className='thead-light' style={{color: "red"}}>
                                        <tr>
                                       
                                            <th width="50%"><b>Judul</b></th>
                                            <th width="20%"><b>Nilai</b></th>
                                            <th width="10%">Delete</th>
                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {siswa.grade.map((y)=>(
                                        <tr>

                                            <td>{y.judul}</td>
                                            <td>{y.nilai}</td>
                                            <td>
                                                <button className='btn btn-danger' ><FaTrash/></button>
                                            </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                </div>
                            </div>
                        </div>
                        <form > 
                        <div className='card mt-3'>
                            <div className='card-header d-flex align-items-center justify-content-between'>
                                <span><b>Input Nilai</b></span>
                            </div>
                            <div className='form card-body'>
                                
                                <div className='row mb-2'>
                                <div className='col-10 col-lg-2'>
                                    <span>Judul :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="text" name='judul' className='form-control'></input>
                                </div>
                                </div>
                                <div className='row mb-3'>
                                <div className='col-10 col-lg-2'>
                                    <span>Nilai :</span>
                                </div>
                                <div className='col-10 col-lg-8'>
                                    <input type="number" name='nilai' className='form-control'></input>
                                </div>
                                </div>
                                <div className='row'>
                                <div className='col-10 col-lg-2'>
                                    <button className='btn btn-primary' type='submit'>Submit</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </div>
    </SidebarClassroomMentor>
  )
}


export default ClassroomMentorInputNilai;