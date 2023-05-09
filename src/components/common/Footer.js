import React from "react";
import LogoLarge from "../../assets/image/logo-large.png";
import Intara from "../../assets/image/intara.png";
import * as Icon from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-3 mb-4 text-center">
              <img src={LogoLarge} alt="logo footer" class="logo img-fluid" />
            </div>
            <div class="col-12 col-lg-4 mb-4">
              <h6>Kontak</h6>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Envelope></Icon.Envelope>
                </div>
                <div class="col-11">
                  <a
                    href="mailto:museakademi.official@gmail.com"
                    class="text-white"
                  >
                    <small>museakademi.official@gmail.com</small>
                  </a>
                </div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Instagram></Icon.Instagram>
                </div>
                <div class="col-11">
                  <a
                    href="https://www.instagram.com/museakademi/"
                    class="text-white"
                    target="_blank"
                  >
                    <small>@museakademi</small>
                  </a>
                </div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Facebook></Icon.Facebook>
                </div>
                <div class="col-11">
                  <a
                    href="https://www.facebook.com/musee.malang.1"
                    class="text-white"
                    target="_blank"
                  >
                    <small>Musė Akademi</small>
                  </a>
                </div>
              </div>
              <div class="row d-flex align-items-center">
                <div class="col-1">
                  <Icon.Whatsapp></Icon.Whatsapp>
                </div>
                <div class="col-11">
                  <a
                    href="https://wa.me/6285173336607"
                    class="text-white"
                    target="_blank"
                  >
                    <small>+62 851-7333-6607</small>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-1">
                  <Icon.House></Icon.House>
                </div>
                <div class="col-11">
                  <span>
                    <small>
                      Jl. Selat Karimata E6/1, Lesanpuro, Kedungkandang, Kota
                      Malang
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-2 mb-4">
              <form action="//simbis.museakademi.com/login" method="POST">
                <input type="hidden" value="{{user.id}}" name="id"></input>
                <h6>Info</h6>
                <ul>
                  <li>
                    <a href="#!">
                      <small>Profil Produk</small>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/12o25hHgCiGHPOKwWg_ychu_tPs2ZL3Pm/view?usp=sharing"
                      target="_blank"
                    >
                      <small>Buku Manual</small>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <small>Lisensi</small>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <small>HAKI</small>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <small>Penghargaan</small>
                    </a>
                  </li>
                </ul>
              </form>
            </div>

            <div class="col-12 col-lg-3 mb-4">
              <h6>Supported By</h6>
              <a href="https://digistaro.com/" target="_blank">
                <img
                  alt="digistar"
                  class="another-logo mb-3"
                  src={Intara}
                  width="150"
                />{" "}
              </a>{" "}
            </div>
          </div>
          <p>Copyright &copy; 2019. Muse Akademi</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
