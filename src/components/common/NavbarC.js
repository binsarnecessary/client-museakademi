import React from "react";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import ProfilPhoto from "../../assets/image/Profil.png";

function NavbarC() {
  return (
    <>
      <nav
        id="nav"
        class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm d-flex align-items-center"
      >
        <div class="navbar-collapse d-sm-none d-lg-block">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item nav-item-account dropdown">
              <a
                class="nav-link nav-link-account dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img class="account-pic" src={ProfilPhoto} alt="" />
                <span>Nama</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="">
                  Profil Saya
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="">
                  Keluar
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="sidebar bg-primary">
          <div class="sidebar-header">
            <a href="" class="d-none d-lg-block">
              <img
                src={LogoNavbar}
                alt="logo"
                class="sidebar-logo"
                height="30"
              />
            </a>
          </div>

          <a href="" class="sidebar-link">
            <i class="las la-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>

          <a href="" class="text-truncate sidebar-link">
            <i class="las la-calendar-day"></i>
            <span>Pengenalan UI/UX</span>
          </a>

          <a href="" class="text-truncate sidebar-link">
            <i class="las la-calendar-day"></i>
            <span>Teknik UI/UX</span>
          </a>

          <a href="" class="text-truncate sidebar-link">
            <i class="las la-calendar-day"></i>
            <span>Mobile dan Dekstop</span>
          </a>

          <a href="" class="sidebar-link">
            <i class="las la-dice-three"></i>
            <span>Tugas</span>
          </a>

          <a href="" class="sidebar-link">
            <i class="las la-user"></i>
            <span>Siswa</span>
          </a>
        </div>
      </nav>
    </>
  );
}
export default NavbarC;
