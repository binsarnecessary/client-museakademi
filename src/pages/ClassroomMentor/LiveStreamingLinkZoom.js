import React from "react";
import Image from "react-bootstrap/Image";
import zoom from "../../assets/image/zoom.png";
import { Link, useParams } from "react-router-dom";
import data from "../ClassroomSiswa/Data/DataKursus";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const LiveStreamingLinkZoom = () => {
  const { kursus, id } = useParams();
  const p = data.find(l => l.kursus === kursus);
  const sesi = p.sesiKursus.find(sesi => sesi.id === +id);
  return (
    <SidebarClassroomMentor>
      <div key={p.id} className="container-fluid  mt-3">
        <h3>Live Classes</h3>
        <h5>{sesi.nameSesi}</h5>
        <Image
          src={sesi.imageMentor}
          className="rounded-circle"
          height="50"
          alt="Avatar"
        ></Image>
        <span className="ml-3">{p.nameMentor}</span>
        <div className="container-fluid col-2 mt-3">
          <Image src={zoom}></Image>
          <a href={sesi.url.urlzoom} class="btn btn-danger btn-block btn-lg" fdprocessedid="ntqaw">
            Join Live Class
          </a>
        </div>
        <div className="row mt-lg-3">
          <div className="mb-3 mt-3 card col-12 col-lg-4 order-lg-2">
            <div className="right-side mt-3 mb-3">
              <a>
                <b>Live Class Specification</b>
              </a>
              <div className="table-responsive">
                <tbody>
                  <tr>
                    <td width="50%">Date</td>
                    <td>{p.kursusStart}</td>
                  </tr>
                  <tr>
                    <td width="50%">Duration</td>
                    <td>{p.timeStart} - {p.timeEnd}</td>
                  </tr>
                </tbody>
              </div>
            </div>
          </div>
          <div className="mt-3 col-12 col-lg-8 order-lg-1">
            <button className="btn btn-primary btn-block btn-lg">
              Information
            </button>
            <div className="card mt-3">
              <div className="ml-3 mx-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarClassroomMentor>
  );
};

export default LiveStreamingLinkZoom;
