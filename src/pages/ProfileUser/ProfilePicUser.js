import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import React, { useState, useEffect } from "react";
import CompProfileUser from "../../components/profileMentor/CompProfileUser";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import Swal from "sweetalert2";

const ProfilePicUser = () => {
  const [image, setImage] = useState(null);
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    profile_picture: null,


  });

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
console.log(currentUserResponse)
      if (currentUserResponse.status) {

        setDataToUpdate(currentUserResponse.data.data.user);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      setIsLoggedIn(false);
    }
  };

  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/jpeg' && file.size <= 500 * 1024) {
      const reader = new FileReader();
      reader.onload = function(event) {
        setImage(event.target.result);
      }
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      alert('Please select a JPEG file that is no larger than 500 KB.');
    }
};

  const handleCardClick = () => {
    const fileInput = document.getElementById("file-input");
    fileInput.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have a valid ID for the data to update
    const dataId = dataToUpdate.id;

    // Perform the Axios PUT/PATCH request to update the data
    axios.patch(`https://server-museakademi-production.up.railway.app/api/users/${dataId}`, dataToUpdate)
    console.log(dataId)  
    .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Profile',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Mengupdate Profile',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        // Handle error response here, e.g., show an error message.
      });
  };

  return (
    <>
      <Navbar />
      <div class="container mt-5"></div>
      <div class="container mb-5">
        <div class="row mt-lg-5">
          <div class="col-12 col-lg-3">
            <CompProfileUser />
          </div>
        
          <div class="col-12 col-lg-9">
            <h5>Ganti Foto Profil</h5>
            <p class="small text-muted">
              Gunakan foto dengan wajah dekat dengan format JPG maksimal 500 KB
            </p>
           <form onSubmit={handleSubmit}>
            <a onClick={handleCardClick}>
              <div
                className="card"
                style={{
                  height: "50%",
                  paddingTop: "50%",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded image"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          marginBottom: "1em",
                          color: "gray",
                        }}
                      >
                        Pilih foto atau geser foto ke area ini. Pastikan foto
                        berformat JPG maksimal 500 KB.
                      </span>
                      <input
                        type="file"
                        id="file-input"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                        accept=".jpg,.jpeg"
                        maxFileSize={100 * 1024}
                      />
                    </div>
                  )}
                </div>
              </div>
            </a>
            <button
              style={{ marginTop: "15px" }}
              type="submit"
              name="action"
              class="btn btn-primary btn-block"
              fdprocessedid="dok02l"
              
            >
              Simpan Perubahan
            </button>
            </form>
          </div>
        
        </div>
      </div>
      <Footer />
    </>
  )
};

export default ProfilePicUser;
