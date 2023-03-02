import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import "../../assets/css/classroom.css";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import ProfilPhoto from "../../assets/image/Profil.jpg";

function NavbarCourse() {
  return (
    <nav
      id="nav"
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
    >
      <div class="container">
        <a href="#" class="d-lg-none">
          <i class="las la-bars" />
        </a>
        <a class="navbar-brand" href="#">
          <img src={LogoNavbar} alt height={30} />
        </a>
        <form class="my-1 ml-lg-3" action="#" method="GET">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text bg-light" id="search-addon">
                <i class="las la-search" />
              </span>
            </div>
            <input
              type="search"
              name="title__icontains"
              class="form-control bg-light"
              placeholder="Cari kursus, kategori, dan mentor"
              aria-describedby="search-addon"
            ></input>
          </div>
        </form>
        <div class="navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>Beranda</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <span>Kursus Saya</span>
              </a>
            </li>
            <div
              class="collapse navbar-collapse d-sm-none d-lg-block"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active nav-item-account dropdown">
                  <a
                    class="nav-link nav-link-account dropdown-toggle"
                    href=""
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img class="account-pic" src={ProfilPhoto} alt="" />
                    <span>Sambo</span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="">
                        Profil Saya
                      </a>
                    </li>
                    <div class="dropdown-divider"></div>
                    <li>
                      <a class="dropdown-item" href="">
                        Keluar
                      </a>
                    </li>
                  </div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarCourse;
