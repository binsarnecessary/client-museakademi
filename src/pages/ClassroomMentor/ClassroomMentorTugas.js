import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import  data  from "../ClassroomSiswa/Data/DataKursus";

const ClassroomMentorTugas = () => {

  {/*
  const [tugas, setTugas] = useState({
    link: "",
    judul: "",
    datestart: "",
    timestart: "",
    dateend: "",
    timeend: "",
});
const [tableData, setTableData] = useState([]);
const handleChange=(e)=>{
    setTugas(
        {
            ...tugas,
            [e.target.name]: e.target.value,
        }
    )
}
const handleSubmit=(e)=>{
    e.preventDefault();
    setTableData([...tableData, tugas]);
    setTugas(
        {
          link: "",
          judul: "",
          datestart: "",
          timestart: "",
          dateend: "",
          timeend: "",
        }
    )
}

const handleDelete=(index)=>{
    const filterData=tableData.filter((item,i)=>i!==index)
    setTableData(filterData);
}

*/}

const { kursus } = useParams();
const item = data.find(p => p.kursus === kursus);

  return (
    <>
      <SidebarClassroomMentor>
        <div className="container-fluid">
          <div className="row mt-lg-3">
            <div key={item.kursus} className="col-12 mb-5">
              <h4 className="mb-3">Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span>Buat Tugas & Evaluasi</span>
                </div>
                <form >
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Link</label>
                      <input type="text" className="form-control" name="link"></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Judul</label>
                      <input type="text" className="form-control" name="judul"></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-muted">Lama Pengerjaan</label>
                      <input type="date" className="form-control mb-2" name="datestart"></input>
                      <input type="time" className="form-control"name="timestart"></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-white"> - </label>
                      <input type="date" className="form-control mb-2" name="dateend"></input>
                      <input type="time" className="form-control" name="timeend"></input>
                    </div>
                    <div class="col-12 d-none d-sm-block">
                      <button type="submit" class="btn btn-danger btn-sm float-left text-color-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>

            <div className="col-12">
              <h4 className="mb-3">Riwayat Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-body">
                  <div className="table table-responsive">
                    <thead className="thead-light">
                      <tr className="small text-muted">
                        <th width="40%">Judul</th>
                        <th width="25%">Mulai</th>
                        <th width="25%">Selesai</th>
                        <th width="10%">Edit</th>
                        <th width="10%">Delete</th>
                      </tr>
                    </thead>
                    <tbody height="150px">
                      {item.tugas.map((tugas) => (
                      <tr>
                        <td>{tugas.judul}</td>
                        <td>{tugas.dateStart} {tugas.timeStart}</td>
                        <td>{tugas.dateEnd} {tugas.timeEnd} </td>
                        <td>
                          <Link
                            to={`/mentor/classroom/tugas-mentor/${item.kursus}/${tugas.id}`}
                            className="btn btn-success"
                          >
                            <FaEdit />
                          </Link>
                        </td>
                        <td>
                        <button className='btn btn-danger'><FaTrash/></button>
                        </td>
                      </tr>
                      ))}
                      
                    </tbody>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorTugas;
