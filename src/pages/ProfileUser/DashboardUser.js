import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import "./DashboardUser.css";
import dataKursus from "../ClassroomSiswa/Data/DataKursus";
import SideDashboardJadwalKursusSiswa from "./SideDashboardJadwalKursusSiswa";

function DashboardUser() {


  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Searching for "${searchTerm}"');
  };

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
          sertifikatData(currentUserResponse.data.user.id)
        } else {
          setIsLoggedIn(false);
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  // const [course, setCourse] = useState([]);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       //Check Valid Token From API
  //       const currentCourseRequest = await axios.get(
  //         "https://server-museakademi-production.up.railway.app/api/course"
  //       );

  //       const currentCourseResponse = currentCourseRequest.data;
  //       // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

  //       if (currentCourseResponse.status) {
  //         // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
  //         // set to redux
  //         // console.log(currentCourseResponse.data.course)

  //         setCourse(currentCourseResponse.data.course);
  //       }
  //     } catch (err) {
  //       setCourse(false);
  //     }
  //   };

  //   fetchData();
  // }, []);



  const [sertifikat, setSertifikat] = useState([]);
  

    const sertifikatData = async (user) => {
      try {
        //Check Valid Token From API
        const currentSertifikatRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/sertifikat/user/${user}`
        );
          console.log(user)
        const currentSertifikatResponse = currentSertifikatRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)
console.log(currentSertifikatResponse)
        if (currentSertifikatResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setSertifikat(currentSertifikatResponse.data.sertifikat);
        }
      } catch (err) {
        setSertifikat(false);
      }
    };

    useEffect(() => {
    sertifikatData();
  }, []);



  return (
    <>
      <Navbar />
      <div class="container mb-5 mt-5">
        <div class="row mt-lg-4">
          <div id="header-dashboard" class="col-12 mt-3">
            <h3>Dashboard {user.name}</h3>
            <p>
              Lihat kelas yang kamu ikutin disini 
            </p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-12 col-lg-7">
            <div class="row mt-3">
              <div class="col-12 mb-3">
                <div class="card">
                      <div className="card-header card-header d-flex align-items-center justify-content-between">
                        <span><b>Sertifikat Kursus</b></span>
                      </div>

                      <div class=" card-body mt-2">
                        <table class="table table-responsive">
                          <thead class="thead-light">
                            <tr>
                              <th
                                scope="col"
                                class="text-left font-weight-normal"
                              >
                                Nama Kursus
                              </th>
                              <th
                                scope="col"
                                class="text-center font-weight-normal"
                              >
                                Sertifikat
                              </th>
                            </tr>
                          </thead>
                          {[sertifikat].map((sertif) => (
                            <tbody>
                              <tr>
                                <td width={"30%"} class="text-left">{sertif.nameCourse}</td>
                                <td width={"10%"} class="text-center text-primary">
                                  <a href={sertif.linkSertifikat} target="blank" >
                                    <i class="las la-certificate la-2x"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          <div class="col-12 col-lg-5">
            <span class="">Jadwal Kursus</span>

            <SideDashboardJadwalKursusSiswa />
          </div>
        </div>
       
      </div>
      
      <Footer />
    </>
  );
}

export default DashboardUser;
