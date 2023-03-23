import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import SidebarClassroomMentor from "./SidebarClassroomMentor";
import DataLiveSiswa from "../ClassroomSiswa/Data/DataLiveSiswa";

const ClassroomMentorLive = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/jpeg' && file.size <= 500 * 1024) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setImage(event.target.result);
      }
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      alert('Please select a JPEG file that is no larger than 500 KB.');
    }
};

  const handleCardClick = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };
  return (
    <>
      <SidebarClassroomMentor>
        <div className="container-fluid mb-2">
          <div className="row mt-lg-3">
            <div className="col-12 col-lg-10 mb-3">
              <h3>Live Classes</h3>
            </div>
            <div className="col-12 col-lg-2 d-none d-sm-block">
              <a className="btn btn-primary btn-block">
                <i className="las la-reply mr-2"></i>
                <span>Kembali</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <span>
                <b>Buat Jadwal Live Clasess</b>
              </span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12 col-lg-12 form-group">
                  <div className="text-muted mb-2">Tema/Judul</div>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-12 form-group">
                  <label className="text-muted">Waktu Mulai</label>
                  <input type="time" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-12 form-group">
                  <label className="text-muted">Waktu Selesai</label>
                  <input type="time" className="form-control"></input>
                </div>
                <div className="col-12 col-lg-12 form-group">
                  <div className="text-muted mb-2">Tanggal</div>
                  <input type="date" className="form-control"></input>
                </div>

                <div className="col-12 col-lg-12 form-group mb-3">
                <div className="text-muted mb-2">Gambar</div>
                <a href="#" onClick={handleCardClick}>
                <div className="card" style={{ height: "200px", }}>
                  <div className="card-body" style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0, display:"flex", alignItems: "center", justifyContent: "center"}}>
                    {image ? (
                      <img src={image} alt="Uploaded image" style={{ height: "100%", objectFit: "cover",}}></img>
                    ) : (
                      <div style={{display: "flex", alignItems: "center", flexDirection: "column",}}><i className="las la-camera la-5x text-muted"></i><span style={{ marginBottom: "1em", color: "gray",}}>Pilih gambar atau geser ke area ini.<br></br> Pastikan ukuran maksimal 500 KB.</span>
                      <input type='file' id="file-input" onChange={handleImageChange} style={{ display: "none"}} accept="image/*" maxFileSize={100 * 1024}></input>
                  </div>
                    )}
                </div>
                </div>
                </a>
                </div>
               

                <div className="col-12 col-lg-12 form-group">
                  <div className="text-muted mb-2 mt-3">Information</div>
                  <textarea
                    class="form-control"
                    id="textAreaExample1"
                    rows="4"
                  ></textarea>
                </div>
                <div class="col-12 d-none d-sm-block">
                  <a class="btn btn-danger btn-sm float-left text-color-primary">
                    Create
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5">
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <span>
                <b>Jadwal Live Clasess</b>
              </span>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="table-responsive mx-3">
                  <thead className="small text-muted">
                    <tr>
                      <td width="35%">Tema</td>
                      <td width="15%">Waktu Mulai</td>
                      <td width="15%">Waktu Selesai</td>
                      <td width="20%">Tanggal</td>
                      <td width="10%">Status</td>
                      <td width="10%">Delete</td>
                      <td width="10%">Detail</td>
                    </tr>
                  </thead>
                  <tbody height="150px">
                    {DataLiveSiswa.map((item) => (
                    <tr key={item.id}>
                      <td>{item.tema} </td>
                      <td>{item.timeStart} </td>
                      <td>{item.timeEnd} </td>
                      <td>{item.eventStart} </td>
                      <td>
                        <span class="badge badge-pill badge-success">
                          {item.status}
                        </span>
                      </td>
                      <td>
                        <a className="btn btn-danger my-2">
                          <FaTrashAlt />
                        </a>
                      </td>
                      <td>
                        <Link
                          to={`/mentor/classroom/live-mentor/${item.id}`}
                          className="btn btn-success my-2"
                        >
                          <HiDotsHorizontal />
                        </Link>
                      </td>
                    </tr>
                    ))}
            
                  </tbody>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorLive;
