
import React, { useState, useEffect } from "react";
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
import axios from "axios";

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

/* const { kursus } = useParams();
const item = items.find(p => p.kursus === kursus); */

  //  const { kursus } = useParams();
  //  const item = items.find(p => p.kursus === kursus);
  const { itemId } = useParams();
  const [course, setCourse] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/${itemId}`
        );
  
        const currentCourseResponse = currentCourseRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
  
        if (currentCourseResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)
  
          setCourse(currentCourseResponse.data.course);
        }
      } catch (err) {
        setCourse(false);
      }
    };
  
    fetchData();
  }, [itemId]);

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
                to={`/mentor/classroom/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><FaTachometerAlt /></div>
                <div className="link_text d-sm-inline">Dashboard</div>
            </NavLink>  

            <NavLink
                to={`/mentor/classroom/sesi-kursus/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><BsCalendar3 /></div>
                <div className="link_text d-sm-inline">Kursus</div>
            </NavLink> 

            <NavLink
                to={`/mentor/classroom/tugas-mentor/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
            >
                <div className="icon"><FaServer /></div>
                <div className="link_text d-sm-inline">Tugas</div>
            </NavLink>  

            <NavLink
                to={`/mentor/classroom/siswa-mentor/${course.id}`}
                key={course.id}
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

