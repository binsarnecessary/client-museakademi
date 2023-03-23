import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

import { Home } from "../pages/Home/Home";
import { Course } from "../pages/Kursus/Course";
import Login from "../components/common/Login";
import Registration from "../components/common/Registration";

import { HelloDetail } from "../pages/Detail/HelloDetail";
import { Livestreaming } from "../pages/Livestreaming/Livestreaming";
import { DetailLivestream } from "../pages/Detail/DetailLivestream";
import { BukaJadwal } from "../pages/Livestreaming/BukaJadwal";

import ClassroomSiswaDashboard from "../pages/ClassroomSiswa/ClassroomSiswaDashboard";
import ClassroomSiswaLive from "../pages/ClassroomSiswa/ClassroomSiswaLive";
import ChangePasswordUser from "../pages/ProfileUser/ChangePasswordUser";
import DaftarMentorUser from "../pages/ProfileUser/DaftarMentorUser";
import DashboardUser from "../pages/ProfileUser/DashboardUser";
import KursusUser from "../pages/ProfileUser/KursusUser";
import ProfilePicUser from "../pages/ProfileUser/ProfilePicUser";
import ProfileUser from "../pages/ProfileUser/ProfileUser";
import ClassroomSiswaPengenalan from "../pages/ClassroomSiswa/ClassroomSiswaPengenalan";
import ClassroomSiswaTugas from "../pages/ClassroomSiswa/ClassroomSiswaTugas";
import LiveStreamingDetailById from "../pages/ClassroomSiswa/LiveStreamingDetailById";
import LiveStreamingLinkZoom from "../pages/ClassroomSiswa/LiveStreamingLinkZoom";
import CardSiswaJadwalSesi from '../pages/ClassroomSiswa/CardSiswaJadwalSesi';
import CardSiswaHasilTugasEvaluasi from '../pages/ClassroomSiswa/CardSiswaHasilTugasEvaluasi';

const UserRoutes = [
  {
    name: "Home Page",
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    name: "Course",
    path: "/course",
    children: [
      {
        path: "",
        element: <Course />,
      },
      {
        path: "/:itemId",
        element: <HelloDetail />,
      },
    ],
  },
  {
    name: "Live Streaming",
    path: "/live-streaming",
    children: [
      {
        path: "",
        element: <Livestreaming />,
      },
      {
        path: "/:itemId",
        element: <DetailLivestream />,
      },
    ],
  },
  {
    path: "/"
  },
  {
    name: "Dashboard User",
    path: "/classroom/user",
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            element: <ClassroomSiswaDashboard/>,
          },
          {
            path: "/jadwalsesi",
            element: <CardSiswaJadwalSesi/>,
          },
          {
            path: "/hasiltugas",
            element: <CardSiswaHasilTugasEvaluasi/>
          },
        ],
      },
      {
        path: "/pengenalan_siswa",
        element: <ClassroomSiswaPengenalan />,
      },
      {
        path: "/tugas_siswa",
        element: <ClassroomSiswaTugas />,
      },
      {
        path: "/live-streaming-siswa",
        children: [
          {
            path: "",
            element: <ClassroomSiswaLive />,
          },
          {
            path: "/live-streaming-id",
            children: [
              {
                path: "/:id",
                children: [
                  {
                    path: "",
                    element: <LiveStreamingDetailById/>,
                  },
                  {
                    path: "/:id",
                    element: <LiveStreamingLinkZoom/>
                  }
                ]

                
              },
             
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Profile User",
    path: "/profile-user",
    children: [
      {
        path: "",
        element: <ProfileUser />,
      },
      {
        path: "/daftar-mentor",
        element: <DaftarMentorUser />,
      },
      {
        path: "/change-password",
        element: <ChangePasswordUser />,
      },
      {
        path: "/fotoprofile",
        element: <ProfilePicUser />,
      },
    ],
  },
  {
    name: "Profile Dashboard",
    path: "/user",
    element: <DashboardUser />
  }
];

export default UserRoutes;
