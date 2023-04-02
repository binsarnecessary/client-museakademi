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
import ClassroomSiswaTugas from "../pages/ClassroomSiswa/ClassroomSiswaTugas";
import LiveStreamingLinkZoom from "../pages/ClassroomSiswa/LiveStreamingLinkZoom";
import ClassroomSiswaNilai from '../pages/ClassroomSiswa/ClassroomSiswaNilai';
import ClassroomSiswaSesiKursus from '../pages/ClassroomSiswa/ClassroomSiswaSesiKursus';
import ClassroomSiswaSesiKursusDetailById from '../pages/ClassroomSiswa/ClassroomSiswaSesiKursusDetailById';

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
        element: <ClassroomSiswaDashboard/>,
      },
      {
        path: "/sesi-kursus",
        children: [
          {
            path: "",
            element: <ClassroomSiswaSesiKursus/>,
          },
          {
            path: "/sesi-kursus-id",
            children: [
              {
                path: "/:id",
                children: [
                  {
                    path: "",
                    element: <ClassroomSiswaSesiKursusDetailById/>,
                  },
                  {
                    path: "/:id",
                    element: <LiveStreamingLinkZoom/>
                  }
                ]
                
              }
            ]
          }
        ]
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
                    path: "/:id",
                    element: <LiveStreamingLinkZoom/>
                  }
                ]

                
              },
             
            ],
          },
        ],
      },
      {
        path: "/nilai-siswa",
        element: <ClassroomSiswaNilai/>,
      }
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
