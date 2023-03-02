import React from "react";
import "../../assets/css/dashboard-classroom.css";
import "../../assets/css/style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CM_Card1 from "./CM_Card1";
import CS_Sidebar3 from "./CS_Sidebar3";

const CM_Dashboard = () => {
  return (
    <>
      <CS_Sidebar3>
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
                  <span className="text-muted">Tugas Selesai</span>
                </div>
              </div>
            </div>
            <div className="statistic-col card shadow-sm">
              <div className="statistic-item">
                <i className="las la-clipboard-check text-primary"></i>
                <div>
                  <h4>98</h4>
                  <span className="text-muted">Nilai Akhir</span>
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
                    Jadwal
                  </Link>
                </li>
              </ul>
              <CM_Card1 />
            </div>
          </div>
        </div>
      </CS_Sidebar3>
    </>
  );
};

export default CM_Dashboard;
