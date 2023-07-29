import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard-classroom.css";
import "../../assets/css/style.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardJadwalClassroomMentor from "./CardJadwalClassroomMentor";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorDashboard = () => {

  const {itemId} = useParams();
  const [course, setCourse] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const currentCourseRequest = await axios.get(
          `https://server-museakademi-production.up.railway.app/api/course/${itemId}`
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
    <>
      <SidebarClassroomMentor>
        <div className="container-fluid mb-5 mt-3">
          <div className="row">
            <div className="col-12 mb-3">
              <h4>Dashboard</h4>
            </div>
          </div>
          <div className="statistic-row mb-3">
            <div className="statistic-col card shadow-sm">
              <div className="statistic-item">
                <i className="las la-briefcase text-primary"></i>
                <div>
                  <h5>{course.courseTitle}</h5>
                  <span className="text-muted">{course.courseDescription}</span>
                </div>
              </div>
            </div>  
          </div>
          <div className="row">
            <div className="col-12">
              <ul className="nav nav-pills" id="tabDashboard" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link
                    className="nav-link active"
                    id="session-tab"
                    data-toggle="tab"
                    href="#session"
                    role="tab"
                    aria-controls="session"
                    aria-selected="true"
                    to=""
                  >
                    Sesi Kursus
                  </Link>
                </li>
              </ul>
              <CardJadwalClassroomMentor />
            </div>
          </div>
        </div>
      </SidebarClassroomMentor>
    </>
  );
};

export default ClassroomMentorDashboard;
