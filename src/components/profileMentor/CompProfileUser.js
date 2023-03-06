import React, {useState} from 'react';
import pict from '../../assets/image/logo-navbar.png'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function CompProfileUser() {

    const navigate = useNavigate();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
  
      const handleSubmit = (event) => {
        event.preventDefault();
      
  
      console.log('Searching for "${searchTerm}"');
      }

    return(
<>
<div class="side-menu">
    <div class="side-menu-top">
        <img src={pict} alt=""/>
            <span class="mt-3">Nama</span>
            <span class="text-muted small">username</span>
    </div>
    <div class="mt-4">
        <a onClick={() => navigate('/profile-user/fotoprofile')} className={`sidebar-link ${location.pathname === '/profile-user/fotoprofile' ? 'active' : ''}`}>
            <i class="las la-camera"></i>
                <span style={{fontSize:'16px'}}>Foto Profil</span>
        </a>
        <a onClick={() => navigate('/profile-user')} className={`sidebar-link ${location.pathname === '/profile-user' ? 'active' : ''}`}>
            <i class="las la-user"></i>
                <span style={{fontSize:'16px'}}>Profile Mentor</span>
        </a>
        <a onClick={() => navigate('/profile-user/daftar-mentor')} className={`sidebar-link ${location.pathname === '/profile-user/daftar-mentor' ? 'active' : ''}`}>
            <i class="las la-unlock"></i>
                <span style={{fontSize:'16px'}}>Mendaftar Mentor</span>
        </a>
        <a onClick={() => navigate('/profile-user/change-password')} className={`sidebar-link ${location.pathname === '/profile-user/change-password' ? 'active' : ''}`} >
            <i class="las la-clipboard-list"></i>
                <span style={{fontSize:'16px'}}>Ganti Kata Sandi</span>
        </a>
    </div>
</div>
</>
    );
}

export default CompProfileUser;