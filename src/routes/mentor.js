import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Profile from "../pages/ProfileMentor/Profile";
import ChangePassword from "../pages/ProfileMentor/ChangePassword";
import DaftarMentor from "../pages/ProfileMentor/DaftarMentor";
import ProfilePic from "../pages/ProfileMentor/ProfilePic";
import DashboardMentor from "../pages/ProfileMentor/DashboardMentor";
import KursusMentor from "../pages/ProfileMentor/KursusMentor";
import { AlurStreaming } from "../pages/LiveMentor/AlurStreaming";
import { StreamingMentor } from "../pages/LiveMentor/StreamingMentor";

import ClassroomMentorDashboard from "../pages/ClassroomMentor/CLassroomMentorDashboard";
import ClassroomMentorClass from "../pages/ClassroomMentor/ClassroomMentorClass";
import ClassroomMentorTugas from "../pages/ClassroomMentor/ClassroomMentorTugas";

import ClassroomMentorSiswa from "../pages/ClassroomMentor/ClassroomMentorSiswa";
import ClassroomMentorEditTugas from "../pages/ClassroomMentor/ClassroomMentorEditTugas";

import ClassroomMentorInputNilai from "../pages/ClassroomMentor/ClassroomMentorInputNilai";
import ClassroomMentorUpdateNilai from "../pages/ClassroomMentor/ClassroomMentorUpdateNilai";
import ClassroomMentorSesiKursus from "../pages/ClassroomMentor/ClassroomMentorSesiKursus";
import ClassroomMentorSesiKursusDetailById from "../pages/ClassroomMentor/ClassroomMentorSesiKursusDetailById";
import LiveStreamingLinkZoom from "../pages/ClassroomMentor/LiveStreamingLinkZoom";
import AturJadwalMentor from "../pages/ProfileMentor/AturJadwalMentor";

const MentorRoutes = [
  {
    name: "Dashboard Mentor",
    path: "/mentor",
    children: [
      {
        path: "/",
        element: <DashboardMentor />,
      },
      {
        path: "/atur-jadwal",
        element: <AturJadwalMentor />,
      },
      {
        path: "/course",
        element: <KursusMentor />,
      },
      {
        path: "/profile",
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: "/picture",
            element: <ProfilePic />,
          },
          {
            path: "/daftar-mentor",
            element: <DaftarMentor />,
          },
          {
            path: "/change-password",
            element: <ChangePassword />,
          },
        ],
      },
      {
        name: "Classroom Mentor",
        path: "/classroom",
        children: [
          {
            path: "/:itemId",
            element: <ClassroomMentorDashboard />,
          },
          {
            path: "/sesi-kursus",
            children: [
              {
                path: "/:itemId",
                children: [
                  {
                    path: "",
                    element: <ClassroomMentorSesiKursus />,
                  },
                  {
                    path: "/:sesiId",
                    children: [
                      {
                        path: "",
                        element: <ClassroomMentorSesiKursusDetailById />,
                      },
                      {
                        path: "/:id",
                        element: <LiveStreamingLinkZoom />,
                      },
                    ],
                  },
                  
                ],
              },
            ],
          },
          {
            path: "/tugas-mentor",
            children: [
              {
                path: "/:itemId",
                children: [
                  {
                    path: "",
                    element: <ClassroomMentorTugas />,
                  },
                  {
                    path: "/:id",
                    element: <ClassroomMentorEditTugas />,
                  },
                ],
              },
            ],
          },
          {
            path: "/siswa-mentor",
            children: [
              {
                path: "/:itemId",
                children: [
                  {
                    path: "",
                    element: <ClassroomMentorSiswa />,
                  },
                  {
                    path: "/:siswaId",
                    element: <ClassroomMentorInputNilai />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default MentorRoutes;
