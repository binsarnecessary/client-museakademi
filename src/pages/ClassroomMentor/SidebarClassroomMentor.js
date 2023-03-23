import React from "react";
import "./sidebarclassroommentor.css";
import "../../assets/css/classroom.css";
import {
  FaTachometerAlt,
  FaVideo,
  FaRegCalendarAlt,
  FaDiceThree,
} from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
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
      path: "/mentor/classroom/class-mentor",
      name: "Pengenalan UI/UX",
      icon: <FaRegCalendarAlt />,
    },
    {
      path: "/mentor/classroom/tugas-mentor",
      name: "Tugas & Evaluasi",
      icon: <FaDiceThree />,
    },
    {
      path: "/mentor/classroom/live-mentor",
      name: "Live Class",
      icon: <FaVideo />,
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
      <div className="container">
        <div className="container-sidebar">
          <div className="sidebar fixed-top">
            <div class="sidebar-header">
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
          <div className="main">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarClassroomMentor;
