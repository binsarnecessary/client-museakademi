
import React from "react";
import "../ClassroomSiswa/sidebarclassroom.css";
import {
  FaTachometerAlt,
  FaServer,
} from "react-icons/fa";
import { BsCalendar3, BsPersonFill } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import Navbar23 from "./ClassroomMentorNavbar";
import items from "../ClassroomSiswa/Data/DataKursus"

const SidebarClassroomMentor = ({ children }) => {
{/*
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
*/}

const { kursus } = useParams();
const item = items.find(p => p.kursus === kursus);
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
                  class="logo-nav"
                  height="30"
                />
              </a>
              </div>
            </div>

            <NavLink
                to={`/mentor/classroom/${item.kursus}`}
                key={item.kursus}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><FaTachometerAlt /></div>
                <div className="link_text d-sm-inline">Dashboard</div>
            </NavLink>  

            <NavLink
                to={`/mentor/classroom/sesi-kursus/${item.kursus}`}
                key={item.kursus}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><BsCalendar3 /></div>
                <div className="link_text d-sm-inline">Kursus</div>
            </NavLink> 

            <NavLink
                to={`/mentor/classroom/tugas-mentor/${item.kursus}`}
                key={item.kursus}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><FaServer /></div>
                <div className="link_text d-sm-inline">Tugas</div>
            </NavLink>  

            <NavLink
                to={`/mentor/classroom/siswa-mentor/${item.kursus}`}
                key={item.kursus}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><BsPersonFill /></div>
                <div className="link_text d-sm-inline">Siswa</div>
            </NavLink>  
          </div>
          <div className="main-sidebar">{children}</div>
        </div>
    </>
  );
};

export default SidebarClassroomMentor;

