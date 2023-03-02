import React from 'react'
import './sidebar.css'
import '../../assets/css/classroom.css'
import { FaTachometerAlt, FaVideo, FaRegCalendarAlt, FaDiceThree } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import LogoNavbar from '../../assets/image/logo-navbar.png'
import ProfilPhoto from '../../assets/image/Profil.jpg'
import Navbar23 from './Navbar23'

const CM_Sidebar3 = ({children}) => {
    const menuItem=[
        {
            path:"/dashboard_class_mentor",
            name:"Dashboard",
            icon:<FaTachometerAlt/>
        },
        {
            path:"/pengenalan_mentor",
            name:"Pengenalan UI/UX",
            icon:<FaRegCalendarAlt/>
        },
        {
            path:"/tugas_mentor",
            name:"Tugas & Evaluasi",
            icon:<FaDiceThree/>
        },
        {
            path:"/live_mentor",
            name:"Live Class",
            icon:<FaVideo/>
        },
        {
            path:"/siswa_mentor",
            name:"Siswa",
            icon:<BsPersonFill/>
        }
    ]
  return (
<>
<Navbar23/>
<div className='container'>

    <div className='container-sidebar'>
        <div className='sidebar'>
        <div class="sidebar-header">
                <a href="" class="d-none d-lg-block">
                    <img src={LogoNavbar} alt="logo" class="sidebar-logo" height="30"/>
                </a>
            </div>
          
            {
               menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text'>{item.name}</div>
                </NavLink>
               )) 
            }
            
        </div>
            <main>{children}</main>
    </div>
    </div>

   
    </>
  )
}

export default CM_Sidebar3