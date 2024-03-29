import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import profil from "../../assets/image/Profil.png";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addUser } from "../../store/slices/authSlice";

const NavbarClassroomSiswa = () => {
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
          "https://server-museakademi-production.up.railway.app/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
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

  const handleLogout = () => {
    localStorage.removeItem("token_key");

    setIsLoggedIn(false);
    setUser({});
    navigate("/login");
  };

  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-white shadow-sm d-flex align-items-center">
        <div className="container">
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Image
            src={user.profile_picture}
            className="rounded-circle"
            height="40"
            alt="Avatar"
          ></Image>
            <a>
          <NavDropdown title={user.name} id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/profile-user">Profil Saya</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout} href="">Keluar</NavDropdown.Item>
          </NavDropdown>
          </a>
        </Navbar.Collapse>
        </div>
      </div>
    </>
  );
};

export default NavbarClassroomSiswa;
