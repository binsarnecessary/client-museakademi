import CompProfileUser from "../../components/profileMentor/CompProfileUser";
import NavbarCompUser from "../../components/profileMentor/NavbarCompUser";
import React, { useState } from "react";
import password from "../../assets/css/password.css";
import style from "../../assets/css/styleProfileMentor.css";
import Footer from "../../components/common/Footer";

const ChangePasswordUser = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(`Password: ${password}`);
  };

  return (
    <>
      <NavbarCompUser />
      <div class="container"></div>
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 col-lg-3">
            <CompProfileUser />
          </div>
          <div class="col-12 col-lg-9">
            <h5>Ganti Kata Sandi</h5>
            <p class="small text-muted">
              Gunakan kombinasi huruf besar, huruf kecil, dan angka minimal 8
              karakter.
            </p>
            <form
              method="post"
              action=""
              enctype="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                value="F16jngT8I67YgYP50or563UDNP3GL9304MBDh5OApO7QF3sUlRCa6f6DzJJRkmpE"
              />
              <div class="row">
                <div class="col-12 form-group">
                  <label for="id_firstname">Kata Sandi Lama</label>
                  <input
                    class="form-control"
                    name="password"
                    type="password"
                    placeholder="Masukkan kata sandi lama"
                  />
                </div>
                <div class="col-12 form-group">
                  <label for="id_firstname">Kata Sandi Baru</label>
                  <input
                    type="password"
                    name="firstname"
                    class="form-control"
                    placeholder="Masukkan kata sandi baru"
                    required=""
                    id="id_firstname"
                    fdprocessedid="4nyfx5"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div class="col-12 form-group">
                  <label for="id_firstname">Ulangi Kata Sandi</label>
                  <input
                    type="password"
                    name="firstname"
                    class="form-control"
                    placeholder="Masukkan kembali kata sandi baru"
                    required=""
                    id="id_firstname"
                    fdprocessedid="4nyfx5"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
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
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChangePasswordUser;
