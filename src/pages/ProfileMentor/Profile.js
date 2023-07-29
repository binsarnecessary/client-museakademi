import Footer from "../../components/common/Footer";
import NavbarComp from "../../components/profileMentor/NavbarComp";
import Navbar from "../../components/common/Navbar";
import CompProfile from "../../components/profileMentor/CompProfile";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import 'react-phone-input-2/lib/style.css'
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {

    const location = useLocation();
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [dataToUpdate, setDataToUpdate] = useState({
      id: '',
      email: '',
      name: '',
      phone: '',
      address: ''
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setDataToUpdate((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
/*     const handleSubmit = (event) => {
      event.preventDefault();
  
      console.log('Searching for "${searchTerm}"');
    }; */

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
  
            setDataToUpdate(currentUserResponse.data.user);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
        } catch (err) {
          setIsLoggedIn(false);
        }
      };


      //UPDATE FORM

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have a valid ID for the data to update
    const dataId = dataToUpdate.id;

    // Perform the Axios PUT/PATCH request to update the data
    axios.patch(`https://server-museakademi-production.up.railway.app/api/users/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Profile',
          icon: 'success',
          confirmButtonText: 'OK',
          willClose(popup) {
            window.location.reload()
          }
        })
       
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        // Handle error response here, e.g., show an error message.
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);


    return(
        <>
        <Navbar />
        <div class="container mt-5">
    </div>
    <div class="container mb-5 ">
        <div class="row mt-lg-5">
            <div class="col-12 col-lg-3">
                <CompProfile/>
            </div>
            <div class="col-12 col-lg-9 mt-3">
                <h5>Informasi Umum</h5>
                    <p class="small text-muted">
                        Halaman ini memuat tentang informasi pribadi Anda
                    </p>
                    <form onSubmit={handleSubmit} action="" enctype="multipart/form-data">
                        <input type="hidden" name="csrfmiddlewaretoken" value="F16jngT8I67YgYP50or563UDNP3GL9304MBDh5OApO7QF3sUlRCa6f6DzJJRkmpE"/>
                        <div class="row">
                            <div class="col-12 form-group">
                                <label for="id_email">Email :</label>
                                    <input class="form-control" name="email" type="email" value={dataToUpdate.email} onChange={handleChange}/>
                            </div>
                            <div class="col-12 col-lg-12 form-group">
                                <label for="id_firstname">Nama :</label>
                                    <input type="text" name="name" class="form-control" required="" id="id_firstname" value={dataToUpdate.name} onChange={handleChange}/>
                            </div>
                            <div class="col-12 form-group">
                                <label for="id_phone">No. Telepon:</label>
                                    <input type="number" name="phone" class="form-control" maxlength="15" minlength="10" required="" id="id_phone" value={dataToUpdate.phone} onChange={handleChange}/>
                            </div>
                            <div class="col-12 form-group">
                                <label for="id_address">Alamat:</label>
                                    <textarea name="address" cols="40" rows="10" class="form-control"  id="id_address" value={dataToUpdate.address} onChange={handleChange}></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" name="action" class="btn btn-primary btn-block" fdprocessedid="dok02l">Simpan Perubahan</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    <Footer />        
        </>
        )
}

export default Profile
