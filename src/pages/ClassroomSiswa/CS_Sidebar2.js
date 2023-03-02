import React from 'react'
import './sidebar.css'
import { FaRegCalendarAlt, FaTachometerAlt, FaVideo, FaDiceThree } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import LogoNavbar from '../../assets/image/logo-navbar.png'



import Navbar23 from './Navbar23'

const CS_Sidebar2 = ({children}) => {
    const menuItem=[
        {
            path:"/dashboard_class_siswa",
            name:"Dashboard",
            icon:<FaTachometerAlt/>
        },
        {
            path:"/pengenalan_siswa",
            name:"Pengenalan UI/UX",
            icon:<FaRegCalendarAlt/>
        },
        {
            path:"/tugas_siswa",
            name:"Tugas & Evaluasi",
            icon:<FaDiceThree/>
        },
        {
            path:"/live_siswa",
            name:"Live Class",
            icon:<FaVideo/>
        }
    ]
  return (
<>
<Navbar23/>
<div className='container'>

    <div className='container-sidebar'>
        <div className='sidebar'>
            <div className="sidebar-header">
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

export default CS_Sidebar2