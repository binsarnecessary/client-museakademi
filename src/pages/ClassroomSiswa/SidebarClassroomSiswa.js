import React, { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import axios from "axios";
import "./sidebarclassroom.css";
import { NavLink, useParams } from "react-router-dom";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import NavbarClassroomSiswa from "./NavbarClassroomSiswa";
import { BsCalendar3, BsFillGridFill} from "react-icons/bs";
import {
  FaTachometerAlt,
  FaServer,
} from "react-icons/fa";
import items from "./Data/DataKursus"

{/*
const menuItem = [
  {
    path: "/classroom/user/:kursus",
    name: "Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    name: "Sesi Kursus",
    icon: <BsCalendar3 />,
  },
  {

    name: "Tugas & Evaluasi",
    icon: <FaServer />,
  },
  {

    name: "Nilai",
    icon: <BsFillGridFill />
  }
];
*/}

const SidebarClassroomSiswa = ({ children }) => {
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

<NavbarClassroomSiswa/>
        <div className="container-sidebar">
          <div className="sidebar2">
            <div  className="sidebar-header">
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
                to={`/classroom/user/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
              >
                <div className="icon"><FaTachometerAlt /></div>
                <div className="link_text d-sm-inline">Dashboard</div>
              </NavLink>

              <NavLink
                to={`/classroom/user/sesi-kursus/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
              >
                <div className="icon"><BsCalendar3 /></div>
                <div className="link_text d-sm-inline">Kursus</div>
              </NavLink>

              <NavLink
                to={`/classroom/user/tugas_siswa/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
              >
                <div className="icon"><FaServer /></div>
                <div className="link_text d-sm-inline">Tugas</div>
              </NavLink>

              <NavLink
                to={`/classroom/user/nilai-siswa/${course.id}`}
                key={course.id}
                className="link2"
                activeclassName="active"
              >
                <div className="icon"><BsFillGridFill /></div>
                <div className="link_text d-sm-inline">Nilai</div>
              </NavLink>

          </div>
          <div className="main-sidebar">{children}</div>
        </div>
     


    </>
  );
};


export default SidebarClassroomSiswa;
