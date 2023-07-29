import React, {useState, useEffect} from 'react';
import pict from '../../assets/image/logo-navbar.png'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function CompProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Searching for "${searchTerm}"');
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Get Token From Local Storage
        const token = localStorage.getItem("token_key");

        if (!token) {
          setIsLoggedIn(false);
          return;
        }

        //Check Valid Token From API
        const currentUserRequest = await axios.get(
          "https://server-museakademi-production.up.railway.app/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;

        if (currentUserResponse.status) {

          setUser(currentUserResponse.data.user);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    fetchData();
  }, []);
    return(
<>
<div class="side-menu">
    <div class="side-menu-top ">
        <img src={user.profile_picture} alt=""/>
            <span class="mt-3">{user.name}</span>
            <span class="text-muted small">{user.email}</span>
    </div>
    <div class="mt-4">
        <a onClick={() => navigate('/mentor/profile/picture')} className={`sidebar-link ${location.pathname === '/Profile_Pic' ? 'active' : ''}`}>
            <i class="las la-camera"></i>
                <span style={{fontSize:'16px'}}>Foto Profil</span>
        </a>
        <a onClick={() => navigate('/mentor/profile')} className={`sidebar-link ${location.pathname === '/Profile' ? 'active' : ''}`}>
            <i class="las la-user"></i>
                <span style={{fontSize:'16px'}}>Profile Mentor</span>
        </a>
        <a onClick={() => navigate('/mentor/profile/daftar-mentor')} className={`sidebar-link ${location.pathname === '/DaftarMentor' ? 'active' : ''}`}>
            <i class="las la-unlock"></i>
                <span style={{fontSize:'16px'}}>Mendaftar Mentor</span>
        </a>
        <a onClick={() => navigate('/mentor/profile/change-password')} className={`sidebar-link ${location.pathname === '/ChangePassword' ? 'active' : ''}`} >
            <i class="las la-clipboard-list"></i>
                <span style={{fontSize:'16px'}}>Ganti Kata Sandi</span>
        </a>
    </div>
</div>
</>
    );
}

export default CompProfile;