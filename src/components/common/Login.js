import React from "react";
import "../../assets/css/auth.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <div class="container my-5">
        <div class="row justify-content-center align-items-center h-75">
          <div class="col-12 col-lg-4">
            <div class="text-center">
              <h5>Masuk</h5>
              <p class="small text-muted">
                Gunakan nama pengguna dan kata sandi Anda untuk masuk ke
                aplikasi
              </p>
            </div>
            <form method="POST">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="usernameoremail"
                  placeholder="Nama Pengguna atau Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  placeholder="Kata Sandi"
                />
              </div>
              <input type="hidden" name="next" value="" />
              <button type="submit" class="btn btn-sm btn-block btn-primary">
                Masuk
              </button>
            </form>
            <div class="text-muted text-center small py-2">atau</div>

            <a href="" class="btn-google btn btn-sm btn-block">
              <i class="fa fa-google"></i>
              <span class="ml-2">Masuk dengan Google</span>
            </a>

            <div class="text-center small py-3">
              <a href="">Lupa Kata Sandi?</a>
              <br />
              Belum punya akun ?<a href=""> Daftarkan segera !</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
