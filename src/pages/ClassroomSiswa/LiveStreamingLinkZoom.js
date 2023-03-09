import React from "react";
import profil from "../../assets/image/Profil.png";
import Image from "react-bootstrap/Image";
import zoom from "../../assets/image/zoom.png";
import SidebarClassroomSiswa from "./SidebarClassroomSiswa";
import { Link } from "react-router-dom";

const LiveStreamingLinkZoom = () => {
  return (
    <SidebarClassroomSiswa>
      <div className="container-fluid  mt-3">
        <h3>Live Classes</h3>
        <h5>New In Class Programming</h5>
        <Image
          src={profil}
          className="rounded-circle"
          height="50"
          alt="Avatar"
        ></Image>
        <span className="ml-3">Dhani Prasetyo Raharjo</span>
        <div className="container-fluid col-3 mt-3">
          <Image src={zoom}></Image>
          <Link class="btn btn-danger btn-block btn-lg" fdprocessedid="ntqaw">
            Join Live Class
          </Link>
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
                    <td>10 Desember 2022</td>
                  </tr>
                  <tr>
                    <td width="50%">Duration</td>
                    <td>13.00 - 16.30</td>
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
    </SidebarClassroomSiswa>
  );
};

export default LiveStreamingLinkZoom;
