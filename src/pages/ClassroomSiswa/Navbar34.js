import React from 'react'
import ProfilPhoto from '../../assets/image/img/Profil.jpg'

const Navbar34 = () => {
  return (
    <>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm d-flex align-items-center">

<div class="navbar-collapse d-sm-none d-lg-block">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item nav-item-account dropdown">
            <a class="nav-link nav-link-account dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img class="account-pic" src={ProfilPhoto} alt=""/>
                <span>Nama</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="">Profil Saya</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="">Keluar</a>
            </div>
        </li>
    </ul>
</div>
 
</nav>

    </>
  )
}

export default Navbar34