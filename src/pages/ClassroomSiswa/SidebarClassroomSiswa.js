import React from "react";
import "./sidebarclassroomsiswa.css";
import { NavLink } from "react-router-dom";
import LogoNavbar from "../../assets/image/logo-navbar.png";
import NavbarClassroomSiswa from "./NavbarClassroomSiswa";
import menuItem from "./Data/SidebarMenu";



const SidebarClassroomSiswa = ({ children }) => {

  return (
    <>
      <NavbarClassroomSiswa/>
      <div className="container">
        <div className="container-sidebar">
          <div className="sidebar fixed-top">
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
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>
          <div className="main-sidebar">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SidebarClassroomSiswa;
