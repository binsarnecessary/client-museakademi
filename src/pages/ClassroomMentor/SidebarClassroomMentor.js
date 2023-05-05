
import React from "react";
import "../ClassroomSiswa/sidebarclassroom.css";
import "../../assets/css/classroom.css";
import {
  FaTachometerAlt,
  FaServer,
} from "react-icons/fa";
import { BsCalendar3, BsPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import Navbar23 from "./ClassroomMentorNavbar";

const SidebarClassroomMentor = ({ children }) => {
  const menuItem = [
    {
      path: "/mentor/classroom/",
      name: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      path: "/mentor/classroom/sesi-kursus",
      name: "Sesi",
      icon: <BsCalendar3 />,
    },
    {
      path: "/mentor/classroom/tugas-mentor",
      name: "Tugas & Evaluasi",
      icon: <FaServer />,
    },
    {
      path: "/mentor/classroom/siswa-mentor",
      name: "Siswa",
      icon: <BsPersonFill />,
    },
  ];
  return (
    <>
      <Navbar23 />
        <div className="container-sidebar">
          <div className="sidebar2">
            <div class="sidebar-header">
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

export default SidebarClassroomMentor;

