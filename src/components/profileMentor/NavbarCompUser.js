import React, { useState, useEffect } from "react";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import Registration from "../common/Registration";
import Login from "../common/Login";

import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { logout } from "../../store/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import axios from "axios";
import { addUser } from "../../store/slices/authSlice";

import { Course } from "../../pages/Kursus/Course";
import { Home } from "../../pages/Home/Home";
import { Error } from "../common/Error";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Get Token From Local Storage
        const token = localStorage.getItem("token_key");

        if (!token) {
          setIsLoggedIn(false);
          return;
        }

        //Check Valid Token From API
        const currentUserRequest = await axios.get(
          "http://localhost:7000/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {
          // set to redux
          dispatch(
            addUser({
              user: currentUserResponse.data.user,
              token: token,
            })
          );

          setUser(currentUserResponse.data.user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);

  // const logout = () => {
  //   localStorage.removeItem('token_key');

  //   setIsLoggedIn(false);
  //   setUser({});
  // };
  const handleLogout = () => {
    localStorage.removeItem("token_key");

    setIsLoggedIn(false);
    setUser({});
    navigate("/login");
  };

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
              {isLoggedin ? (
                <>
                  <li class="nav-item d-none d-sm-inline-block">
                    <Link class="nav-link" to="/classroom/user">
                      <i class="las la-chalkboard-teacher d-lg-none"></i>
                      <span>Kursus</span>
                    </Link>
                  </li>
                  <li class="nav-item d-none d-sm-inline-block">
                    <Link class="nav-link" to="/profile-user/daftar-mentor">
                      <i class="las la-handshake d-lg-none"></i>
                      <span>Daftar Mentor</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
              
              {isLoggedin ? (
                <>
                  <li class="nav-item">
                    <a>
                      <NavDropdown
                        title={user.name}
                        id="navbarScrollingDropdown"
                      >
                        <NavDropdown.Item
                          onClick={() => navigate("/profile-user")}
                        >
                          Profile
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          onClick={() => navigate("/classroom/user")}
                        >
                          My Class
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout}>
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    </a>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
