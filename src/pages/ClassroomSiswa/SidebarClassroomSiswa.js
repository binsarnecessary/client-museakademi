import React from "react";
import "./sidebarclassroomsiswa.css";
import {
  FaRegCalendarAlt,
  FaTachometerAlt,
  FaVideo,
  FaDiceThree,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import NavbarClassroomSiswa from "./NavbarClassroomSiswa";

const SidebarClassroomSiswa = ({ children }) => {
  const menuItem = [
    {
      path: "/classroom/user/",
      name: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      path: "/classroom/user/pengenalan_siswa",
      name: "Pengenalan UI/UX",
      icon: <FaRegCalendarAlt />,
    },
    {
      path: "/classroom/user/tugas_siswa",
      name: "Tugas & Evaluasi",
      icon: <FaDiceThree />,
    },
    {
      path: "/classroom/user/live-streaming-siswa",
      name: "Live Class",
      icon: <FaVideo />,
    },
  ];
  return (
    <>
      <NavbarClassroomSiswa />
      <div className="container">
        <div className="container-sidebar">
          <div className="sidebar">
            <div className="sidebar-header">
              <a href="/" class="d-none d-lg-block">
                <img
                  src={LogoNavbar}
                  alt="logo"
                  class="sidebar-logo"
                  height="30"
                />
              </a>
            </div>

            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default SidebarClassroomSiswa;
