import Footer from "../../components/common/Footer";
import NavbarComp from "../../components/profileMentor/NavbarComp";
import React, { useState } from "react";
import CompProfile from "../../components/profileMentor/CompProfile";
import "react-phone-input-2/lib/style.css";

const Profile_Pic = () => {
  const [image, setImage] = useState(null);

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

  return (
    <>
      <NavbarComp />
      <div class="container mt-5"></div>
      <div class="container mb-5">
        <div class="row mt-lg-5">
          <div class="col-12 col-lg-3">
            <CompProfile />
          </div>
          <div class="col-12 col-lg-9 mt-5">
            <h5>Ganti Foto Profil</h5>
            <p class="small text-muted">
              Gunakan foto dengan wajah dekat dengan format JPG maksimal 500 KB
            </p>
            <a href="#" onClick={handleCardClick}>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile_Pic;
