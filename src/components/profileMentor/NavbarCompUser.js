import '../../assets/css/styleProfileMentor.css'
import '../../assets/css/bootstrapProfileMentor.css'
import pict from '../../assets/image/logo-navbar.png'
import { NavDropdown } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';

function NavbarCompUser() {

  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
    

    console.log('Searching for "${searchTerm}"');
    }

  return (
<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
  <div class="container">
    <a href="#" class="d-lg-none">
      <i class="las la-bars" />
    </a>
    <a class="navbar-brand" href="/">
      <img src={pict} alt height={30} />
    </a>
    <form class="my-1 ml-lg-3" action="#" method="GET">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text bg-light" id="search-addon">
            <i class="las la-search" />
          </span>
        </div>
        <input type="search" name="title__icontains" class="form-control bg-light"  placeholder="Cari kursus, kategori, dan mentor" aria-describedby="search-addon"></input>
      </div>
    </form>
    <div class="navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item d-none d-sm-inline-block">
          <a class="nav-link" onClick={() => navigate('/DashboardUser')}>
          <i class="las la-chalkboard-teacher d-lg-none"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a class="nav-link" onClick={() => navigate('/KursusUser')}>
          <i class="las la-handshake d-lg-none"></i>
            <span>Kursus</span>
          </a>
        </li>
        <li class="nav-item">
          <a>
          <NavDropdown title="Nama Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => navigate('/profile-user')}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/dashboard_class_mentor')}>My Class</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default NavbarCompUser;