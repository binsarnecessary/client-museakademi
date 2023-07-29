import React, { useState, useEffect } from "react";
import axios from "axios";
import dataKursus from '../ClassroomSiswa/Data/DataKursus'
import { Link } from 'react-router-dom'

const SideDashboardJadwalKursusMentor = () => {

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
          userData(currentUserResponse.data.user.id)
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
  const [course, setCourse] = useState([]);
  

    const userData = async (user) => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/mentor/${user}`
        );

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
    fetchData();
  }, []); 

  return (
    <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
              {course.map(course=>(
                <div class="card mb-3">           
                  <div class="schedule-course-item">  
                    <i class="las la-calendar-day text-primary"></i>
                    <div>  
                      <span>
                        <Link to={`/mentor/classroom/${course.id}`} class="schedule-course-title" style={{textDecoration: "none", color: "black"}}>
                          {course.courseTitle}
                        </Link>
                        <br />
                        <span class="small">{course.courseStartDate}</span>
                      </span>
                      <span class="text-muted schedule-course-detail">
                        <span>{course.courseTimeStart} - {course.courseTimeEnd}</span>
                      </span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
  )
}

export default SideDashboardJadwalKursusMentor