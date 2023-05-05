import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/common/Footer";
import CompProfileUser from "../../components/profileMentor/CompProfileUser";
import { useNavigate, Navigate } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import "react-phone-input-2/lib/style.css";

const ProfileUser = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [user, setUser] = useState({});


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Searching for "${searchTerm}"');
  };

  return (
    <>
      <Navbar />
      <div class="container mt-5"></div>
      <div class="container mb-5 ">
        <div class="row mt-lg-5">
          <div class="col-12 col-lg-3">
            <CompProfileUser />
          </div>
          <div class="col-12 col-lg-9 ">
            <h5>Informasi Umum</h5>
            <p class="small text-muted">
              Halaman ini memuat tentang informasi pribadi Anda
            </p>
            <form method="post" action="" enctype="multipart/form-data">
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="F16jngT8I67YgYP50or563UDNP3GL9304MBDh5OApO7QF3sUlRCa6f6DzJJRkmpE"
              />
              <div class="row">
                <div class="col-12 form-group">
                  <label for="id_firstname">Email :</label>
                  <input
                    class="form-control"
                    name="email"
                    disabled=""
                    type="email"
                    placeholder="E-mail"
                    fdprocessedid="to1rph"
                  />
                </div>
                <div class="col-12 col-lg-6 form-group">
                  <label for="id_firstname">Nama Depan:</label>
                  <input
                    type="text"
                    name="firstname"
                    class="form-control"
                    placeholder="Nama Depan"
                    required=""
                    id="id_firstname"
                    fdprocessedid="4nyfx5"
                  />
                </div>
                <div class="col-12 col-lg-6 form-group">
                  <label for="id_lastname">Nama Belakang:</label>
                  <input
                    type="text"
                    name="lastname"
                    class="form-control"
                    placeholder="Nama Belakang"
                    required=""
                    id="id_lastname"
                    fdprocessedid="2kq6cc"
                  />
                </div>
                <div class="col-12 form-group">
                  <label for="id_username">Nama Pengguna:</label>
                  <input
                    type="text"
                    name="username"
                    class="form-control"
                    placeholder="Nama Pengguna"
                    minlength="8"
                    required=""
                    id="id_username"
                    fdprocessedid="wmtt0e"
                  />
                </div>
                <div class="col-12 form-group">
                  <label for="id_phone">No. Telepon:</label>
                  <input
                    type="number"
                    name="phone"
                    class="form-control"
                    placeholder="No. Telepon"
                    maxlength="15"
                    minlength="10"
                    required=""
                    id="id_phone"
                    fdprocessedid="n5a3a"
                  />
                </div>
                <div class="col-12 form-group">
                  <label for="id_address">Alamat:</label>
                  <textarea
                    name="address"
                    cols="40"
                    rows="10"
                    class="form-control"
                    placeholder="Alamat"
                    required=""
                    id="id_address"
                  ></textarea>
                </div>
                <div class="col-12">
                  <button
                    type="submit"
                    name="action"
                    class="btn btn-primary btn-block"
                    fdprocessedid="dok02l"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) 
};

export default ProfileUser;
