import CompProfileUser from "../../components/profileMentor/CompProfileUser";
import Navbar from "../../components/common/Navbar";
import { useNavigate } from "react-router-dom";
import React, {useRef, useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import Footer from "../../components/common/Footer";
import { useDispatch } from "react-redux";
import axios, { Axios } from "axios";
import Swal from "sweetalert2";
import { addUser } from "../../store/slices/authSlice";

const DaftarMentorUser = () => {


  // user yg login

 const dispatch = useDispatch();
 const navigate = useNavigate();
 const [isLoggedin, setIsLoggedIn] = useState(false);
 const [user, setUser] = useState({});

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
         // set to redux
         dispatch(
           addUser({
             user: currentUserResponse.data.user,
             token: token,
           })
         );

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

  // POST MENTOR

const user_id = useRef("")
const skill = useRef("");
const nomorKTP = useRef("");
const scanKTP  = useRef("");
const fileCV = useRef("");
const linkVideo = useRef("");
const aboutMe = useRef("");

const [errorResponse, setErrorResponse] = useState({
  isError: false,
  message: "",
});

const addMentor = async (e) => {
  e.preventDefault();

  try {
    const postMentor = new FormData();

    postMentor.append("user_id", user_id.current.value);
    postMentor.append("skill", skill.current.value);
    postMentor.append("nomorKTP", nomorKTP.current.value);
    postMentor.append("scanKTP", scanKTP.current.value);
    postMentor.append("fileCV", fileCV.current.value);
    postMentor.append("linkVideo", linkVideo.current.value);
    postMentor.append("aboutMe", aboutMe.current.value);

    const postMentorRequest = await axios.post(
      "https://server-museakademi-production.up.railway.app/api/mentor",
      postMentor,
      
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const postMentorResponse = postMentorRequest.data;
    console.log(postMentorRequest);
    if(postMentorResponse.status) {
       Swal.fire({
          title: 'Sukses!',
          text: 'Anda berhasil mendaftar mentor',
          icon: 'success',
          confirmButtonText: 'OK',
          willClose(popup) {
            window.location.reload()
          }
        })
    }
  } catch (err) {
    console.log(err);
    const response = err.response.data;

    setErrorResponse({
      isError: true,
      message: response.message,
    });

    Swal.fire({
      title: 'Gagal!',
      text: "Periksa Kembali Data Isian Anda",
      icon: 'error',
      confirmButtonText: 'OK'
    });

  }
};


  return (
    <>
      <Navbar />
      <div className="container mt-5"></div>
      <div className="container mb-5">
        <div className="row mt-lg-5 ">
          <div className="col-12 col-lg-3">
            <CompProfileUser />
          </div>
          <div className="col-12 col-lg-9">
            <h5>Mendaftar Sebagai Mentor</h5>
            <p className="small text-muted">
              Ayo daftarkan diri Anda sebagai mentor dengan cara melengkapi isian dibawah ini
            </p>

            <form onSubmit={addMentor}>

                        <div className="row">
                            <div className="col-12 col-lg-6 form-group">
                                <label>User ID</label>
                                    <input className="form-control" name="user_id" type="number"  ref={user_id} value={user.id}/>
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>Skill</label>
                                    <input className="form-control" name="skill" type="text" placeholder="Keahlian anda"  ref={skill}/>
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>About Me</label>
                                    <input className="form-control" name="aboutMe" type="text" placeholder="Deskripsikan diri anda"  ref={aboutMe}/>
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>Nomor KTP</label>
                                    <input className="form-control" name="nomorKTP" type="number" placeholder="Nomor KTP anda" ref={nomorKTP}/>
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>Scan KTP</label>
                                    <input type="url" name="scanKTP" className="form-control" placeholder="Isi dengan link drive" ref={scanKTP}/>
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>File CV</label>
                                    <input type="url" name="fileCV" className="form-control" placeholder="Isi dengan link drive" ref={fileCV}/>
                            </div>
                       
                            <div className="col-12 col-lg-6 form-group">
                                <label>Link Video</label>
                                    <input type="url" name="linkVideo" placeholder="Video pengenalan diri anda" className="form-control" required="" ref={linkVideo}></input>
                            </div>
                            <div className="col-12">
                                <button type="submit" name="action" className="btn btn-primary btn-block">Simpan Perubahan</button>
                            </div>
                        </div>
                    </form>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );


};

export default DaftarMentorUser;
