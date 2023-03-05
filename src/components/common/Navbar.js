import React, {useState, useEffect} from "react";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import Registration from "./Registration";
import Login from "./Login";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import { Course } from "../../pages/Kursus/Course";
import { Home } from "../../pages/Home/Home";
import { Error } from "./Error";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <nav
        id="nav"
        class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
      >
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src={LogoNavbar} alt height={30} />
          </Link>
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
              <li class="nav-item d-none d-sm-inline-block">
                <Link class="nav-link" to="/">
                  <i class="las la-tachometer-alt d-lg-none"></i>
                  <span>Beranda</span>
                </Link>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <Link class="nav-link" to="/course">
                  <i class="las la-chalkboard-teacher d-lg-none"></i>
                  <span>Kursus</span>
                </Link>
              </li>
              <li class="nav-item d-none d-sm-inline-block">
                <Link class="nav-link" to="/register">
                  <i class="las la-handshake d-lg-none"></i>
                  <span>Daftar Mentor</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="btn btn-sm btn-primary btn-navbar" to="/login">
                  Masuk
                </Link>
              </li>
              <li>
                <Link
                  class="btn btn-sm btn-outline-primary btn-navbar"
                  to="/register"
                >
                  {" "}
                  Daftar{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
