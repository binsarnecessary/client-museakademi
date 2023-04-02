import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import { DataTugas } from "../ClassroomSiswa/Data/DataTugas";

const ClassroomMentorTugas = () => {

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


  return (
    <>
      <SidebarClassroomMentor>
        <div className="container-fluid">
          <div className="row mt-lg-3">
            <div className="col-12 mb-5">
              <h4 className="mb-3">Tugas & Evaluasi</h4>
              <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <span>Buat Tugas & Evaluasi</span>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Link</label>
                      <input type="text" className="form-control" name="link" value={tugas.link} onChange={handleChange}></input>
                    </div>
                    <div className="col-12 col-lg-10 form-group">
                      <label className="text-muted">Judul</label>
                      <input type="text" className="form-control" name="judul" value={tugas.judul} onChange={handleChange}></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-muted">Lama Pengerjaan</label>
                      <input type="date" className="form-control mb-2" name="datestart" value={tugas.datestart} onChange={handleChange}></input>
                      <input type="time" className="form-control"name="timestart" value={tugas.timestart} onChange={handleChange}></input>
                    </div>
                    <div className="col-12 col-lg-5 form-group">
                      <label className="text-white"> - </label>
                      <input type="date" className="form-control mb-2" name="dateend" value={tugas.dateend} onChange={handleChange}></input>
                      <input type="time" className="form-control" name="timeend" value={tugas.timeend} onChange={handleChange}></input>
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
                      {tableData.map((y, i) => (
                      <tr>
                        <td>{y.judul}</td>
                        <td>{y.datestart} {y.timestart}</td>
                        <td>{y.dateend} {y.timeend} </td>
                        <td>
                          <Link
                            to="/mentor/classroom/tugas-mentor/mentor-edit-tugas"
                            className="btn btn-success"
                          >
                            <FaEdit />
                          </Link>
                        </td>
                        <td>
                        <button className='btn btn-danger' onClick={()=>handleDelete(i)}><FaTrash/></button>
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
