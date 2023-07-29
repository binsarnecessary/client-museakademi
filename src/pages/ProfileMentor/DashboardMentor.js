import React, { useState, useEffect } from "react";import Footer from "../../components/common/Footer";
import KategoriCourse1 from "../../assets/image/KategoriCourse1.png";
import Navbar from "../../components/common/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../assets/css/styleProfileMentor.css";
import "../../assets/css/ProfileStyling.css";
import { Link, useParams } from "react-router-dom";
import dataKursus from "../ClassroomSiswa/Data/DataKursus"
import SideDashboardJadwalKursusMentor from "./SideDashboardJadwalKursusMentor";
import axios from "axios";


function DashboardMentor() {

  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [course, setCourse] = useState([]);

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
          userData(currentUserResponse.data.user.id)
          console.log(userData)
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

// Course


    const userData = async (user) => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/mentor/${user}`
        );
        console.log(user, "oeeeeeeeee")
        const currentCourseResponse = currentCourseRequest.data;
        // console.log("🚀 ~ file: HelloDetail.js:28 ~ fetchData ~ currentCourseResponse:", currentCourseResponse)

        if (currentCourseResponse.status) {
          // console.log("🚀 ~ file: HelloDetail.js:31 ~ fetchData ~ currentCourseResponse.status:", currentCourseResponse.status)
          // set to redux
          // console.log(currentCourseResponse.data.course)

          setCourse(currentCourseResponse.data.course);
        }
      } catch (err) {
        setCourse(false);
      }
    };

    useEffect(() => {

  }, []); 
  return (
    <>
      <Navbar />
      <div class="container mb-lg-5">
        <div class="row mt-lg-4 ">
          <div id="header-dashboard" class="col-12 mt-5">
            <h3>Dashboard Mentor</h3>
            <p>
              Hai, {user.name}<span v-html="selectedSmiley"></span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-7">
            <div class="row mt-3">
              <div class="col-12 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div id="card">
                      <a>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div style={{ flex: 1 }}>
                            Daftar Kursus yang Diajar
                          </div>
                          <div>
                            <Link to={"/mentor/atur-jadwal"} className="btn btn-danger btn-sm">
                              Buat Jadwal
                            </Link>
                          </div>
                        </div>
                      </a>
                      
                      <div class="mt-4">
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
                                Tanggal Mulai
                              </th>
                              <th
                                scope="col"
                                class="text-right font-weight-normal"
                              >
                                Tanggal Berakhir
                              </th>
                            </tr>
                          </thead>
                          
                          <tbody>
                          {course.map(c=>(
                          
                            <tr key={c.id}>
                         
                              <td class="text-left font-">
                                {c.courseTitle}
                              </td>
                              <td class="text-center">{c.courseStartDate}</td>
                              <td class="text-right">{c.courseEndDate}</td>
                            </tr>
                             ))}
                          </tbody>
                         
                         
                        </table>
                      </div>
                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>

          <div class="col-12 col-lg-5">
            <span class="text-muted small">Jadwal Kursus</span>
            <SideDashboardJadwalKursusMentor/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DashboardMentor;
