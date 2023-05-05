import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

import "./sidebarclassroom.css";
import { NavLink } from "react-router-dom";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import NavbarClassroomSiswa from "./NavbarClassroomSiswa";
import { BsCalendar3, BsFillGridFill} from "react-icons/bs";
import {
  FaTachometerAlt,
  FaServer,
} from "react-icons/fa";

const menuItem = [
  {
    path: "/classroom/user/",
    name: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    path: "/classroom/user/sesi-kursus",
    name: "Sesi Kursus",
    icon: <BsCalendar3 />,
  },
  {
    path: "/classroom/user/tugas_siswa",
    name: "Tugas & Evaluasi",
    icon: <FaServer />,
  },
  {
    path: "/classroom/user/nilai-siswa",
    name: "Nilai",
    icon: <BsFillGridFill />
  }
];

const SidebarClassroomSiswa = ({ children }) => {


  return (
    <>

<NavbarClassroomSiswa/>
        <div className="container-sidebar">
          <div className="sidebar2">
            <div  className="sidebar-header">
              <div className="top_section">
              <a href="/" class="d-none d-lg-block">
                <img
                  src={LogoNavbar}
                  alt="logo"
                  class="sidebar-logo"
                  height="30"
                />
              </a>
              </div>
            </div>

            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link2"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text d-sm-inline">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <div className="main-sidebar">{children}</div>
        </div>
     


    </>
  );
};


export default SidebarClassroomSiswa;
