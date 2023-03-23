import React, {useState, useEffect} from "react";
import Image from "react-bootstrap/Image";
import { Link, useParams } from "react-router-dom";
import SidebarClassroomSiswa from "./SidebarClassroomSiswa";
import items from "./Data/DataLiveSiswa";


const LiveStreamingDetailById = () => {
  const { id } = useParams();
  const item = items.find(p => p.id === +id);

  return (
    <SidebarClassroomSiswa>
      <div className="container-fluid">
      
        <h3 className="mt-3">Live Classes</h3>

        <div className="row mt-lg-3">
        
          <div key={item.id} className="mb-3 card col-12 col-lg-4 order-lg-2">
          
            <div className="right-side mt-3 mb-3">
              <img
                id="imgcover"
                src={item.image}
                width="100%"
                alt=""
                className="mb-3"
              ></img>
              <form>
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="UZCmiuIyatVQqoLgdbLp4zvYm44ezFbZOHwPSBzrXrwgjSeTX4O4cBBXjKucJ376"
                ></input>

                <Link
                  to={`/classroom/user/live-streaming-siswa/live-streaming-id/${item.id}/${item.id}`}
                  class="btn btn-danger btn-block btn-lg"
                  fdprocessedid="ntqaw"
                >
                  <span className="text-white">Open Class</span>
                </Link>
              </form>
              <h4 className="mt-3">{item.tema}</h4>
              <Image
                src={item.imageMentor}
                className="rounded-circle"
                height="50"
                alt="Avatar"
              ></Image>
              <span className="ml-3">{item.nameMentor}</span>
            </div>
            <a>
              <b>Live Class Specification</b>
            </a>
            <div className="table-responsive mb-3">
              <tbody>
                <tr>
                  <td width="50%">Date</td>
                  <td>{item.eventStart}</td>
                </tr>
                <tr>
                  <td width="50%">Duration</td>
                  <td>{item.timeStart} - {item.timeEnd}</td>
                </tr>
              </tbody>
            </div>
           
          </div>
          
          <div className="col-12 col-lg-8 order-lg-1">
            <button
              className="btn btn-primary btn-block btn-lg"
              fdprocessedid="ntqaw"
            >
              Information
            </button>
            <div className="card mt-3">
              <div className="ml-3 mx-3">
                <p>
                  <span className="text-danger">
                    <b>Catatan : </b>
                  </span>
                  Anda harus bergabung ke sesi langsung dengan instruktur
                  terlebih dahulu dan kemudian bergabung dengan siswa ke
                  dalamnya. Pembuatan Kursus Online
                </p>
                <span>
                  <b>Info Penting</b>
                </span>
                <p className="small">
                  1. Hanya panelis terautentikasi dapat bergabung di webinar:
                  Panelis harus masuk ke akun Zoom yang dikaitkan dengan alamat
                  email yang diundang ke webinar itu. Panelis yang gagal
                  melakukannya akan melihat pemberitahuan pop-up yang memberi
                  tahu bahwa mereka harus masuk ke akun yang terkait dengan
                  alamat email yang diundang.
                </p>
                <p className="small">
                  2. Hanya peserta rapat dan hadirin webinar yang terautentikasi
                  dapat bergabung dengan rapat dan webinar: Peserta rapat dan
                  hadirin webinar harus mengautentikasi menggunakan salah satu
                  dari metode autentikasi sebelum bergabung dengan suatu sesi.
                </p>
                <span>
                  <b>Target Peserta</b>
                </span>
                <p className="small">
                  Kursus ini dapat diikuti oleh mahasiswa serta guru guna
                  mendukung dalam pembuatan media pembelajaran digital yang
                  menarik.
                </p>
                <span>
                  <b>Deskripsi</b>
                </span>
                <p className="small">
                  Terlepas dari proses pembelajaran saat ini programing
                  merupakan salah satu media alternatif yang bisa dimanfaatkan
                  dalam bidang edukasi lho. Tapi, apa sih programing itu ?
                  programing merupakan pembelajaran programing yang menghadirkan
                  sebuah alur cerita dalam bentuk sebuag codingan.{" "}
                </p>
              </div>
            </div>
          </div>
          
        </div>
  
      </div>
    </SidebarClassroomSiswa>
  );
};

export default LiveStreamingDetailById;
