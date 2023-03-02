import React from 'react'
import Image from 'react-bootstrap/Image'
import profil from '../../assets/image/Profil.jpg'

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar23 = () => {
  return (
    <>
     <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='shadow-sm'>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end' >
        <Image src={profil} className="rounded-circle"
                  height="50"
                  alt="Avatar"></Image>
            <NavDropdown title="Nama" id="collasible-nav-dropdown" >
            
              <NavDropdown.Item href="">Profil Saya</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                Keluar
              </NavDropdown.Item>
            </NavDropdown>

        </Navbar.Collapse>

    </Navbar>
    </>
  )
}

export default Navbar23