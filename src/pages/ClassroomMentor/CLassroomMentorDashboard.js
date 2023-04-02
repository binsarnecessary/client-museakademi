import React from "react";
import "../../assets/css/dashboard-classroom.css";
import "../../assets/css/style.css";
import { Link } from "react-router-dom";
import CardJadwalClassroomMentor from "./CardJadwalClassroomMentor";
import SidebarClassroomMentor from "./SidebarClassroomMentor";

const ClassroomMentorDashboard = () => {
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
                  <h4>4</h4>
                  <span className="text-muted">Sesi Kursus</span>
                </div>
              </div>
            </div>
            <div className="statistic-col card shadow-sm">
              <div className="statistic-item">
                <i className="las la-video text-primary"></i>
                <div>
                  <h4>4</h4>
                  <span className="text-muted">Live Class</span>
                </div>
              </div>
            </div>
            <div className="statistic-col card shadow-sm">
              <div className="statistic-item">
                <i className="las la-clipboard-list text-primary"></i>
                <div>
                  <h4>3</h4>
                  <span className="text-muted">Tugas Diberikan</span>
                </div>
              </div>
            </div>
            <div className="statistic-col card shadow-sm">
              <div className="statistic-item">
              <i class="las la-user text-primary"></i>
                <div>
                  <h4>10</h4>
                  <span className="text-muted">Siswa</span>
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
