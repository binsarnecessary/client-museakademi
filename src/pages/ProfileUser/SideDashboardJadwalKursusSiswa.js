
import dataKursus from '../ClassroomSiswa/Data/DataKursus'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from "axios";

const SideDashboardJadwalKursusSiswa = () => {


    const [course, setCourse] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          //Check Valid Token From API
          const currentCourseRequest = await axios.get(
            "https://server-museakademi-production.up.railway.app/api/course/paid/true"
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
  
      fetchData();
    }, []);
  return (
    <div id="comingsoon_sessions" class="row pt-2">
              <div class="col-12 mb-3">
              {course.map((course)=>(
                <div  key={course.id} class="card mb-3">           
                  <div class="schedule-course-item">  
                    <i class="las la-calendar-day text-primary"></i>
                    <div>  
                      <span>
                        <Link to={`/classroom/user/${course.id}`} class="schedule-course-title" style={{textDecoration: "none", color: "black"}}>
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

export default SideDashboardJadwalKursusSiswa