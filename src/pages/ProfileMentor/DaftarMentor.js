import CompProfile from "../../components/profileMentor/CompProfile";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import Footer from "../../components/common/Footer";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div class="container mt-5"></div>
      <div class="container mb-5">
        <div class="row mt-lg-5 ">
          <div class="col-12 col-lg-3 mt-3">
            <CompProfile />
          </div>
          <div class="col-12 col-lg-9 mt-3">
            <h5>Mendaftar Mentor</h5>
            <p class="small text-muted">
              Halaman ini memuat tentang informasi mentor
            </p>
            <h5>Selamat Anda Sekarang Sudah Menjadi Mentor</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
