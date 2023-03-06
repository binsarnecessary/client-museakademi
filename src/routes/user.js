import "bootstrap/dist/css/bootstrap.css";

import { Home } from "../pages/Home/Home";
import { Course } from "../pages/Kursus/Course";
import Login from "../components/common/Login";
import Registration from "../components/common/Registration";

import { HelloDetail } from "../pages/Detail/HelloDetail";
import { Livestreaming } from "../pages/Livestreaming/Livestreaming";
import { DetailLivestream } from "../pages/Detail/DetailLivestream";
import { BukaJadwal } from "../pages/Livestreaming/BukaJadwal";

import Dashboard_classroom from "../pages/ClassroomSiswa/Dashboard_classroom";
import CS_Sesi1 from "../pages/ClassroomSiswa/CS_Sesi1";
import CS_Tugas from "../pages/ClassroomSiswa/CS_Tugas";
import CS_Live from "../pages/ClassroomSiswa/CS_Live";
import CS_Live2 from "../pages/ClassroomSiswa/CS_Live2";
import CS_Live3 from "../pages/ClassroomSiswa/CS_Live3";

import ChangePasswordUser from "../pages/ProfileUser/ChangePasswordUser";
import DaftarMentorUser from "../pages/ProfileUser/DaftarMentorUser";
import DashboardUser from "../pages/ProfileUser/DashboardUser";
import KursusUser from "../pages/ProfileUser/KursusUser";
import Profile_PicUser from "../pages/ProfileUser/Profile_PicUser";
import ProfileUser from "../pages/ProfileUser/ProfileUser";

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
    path: "/buka-jadwal",
    element: <BukaJadwal />,
  },
  {
    name: "Dashboard User",
    path: "/classroom/user",
    children: [
      {
        path: "",
        element: <Dashboard_classroom />,
      },
      {
        path: "/class-user",
        element: <CS_Sesi1 />,
      },
      {
        path: "/exam-user",
        element: <CS_Tugas />,
      },
      {
        path: "/live-streaming",
        children: [
          {
            path: "",
            element: <CS_Live />,
          },
          {
            path: "/live-streaming-id",
            children: [
              {
                path: "",
                element: <CS_Live2 />,
              },
              {
                path: "/link-zoom",
                element: <CS_Live3 />,
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
        element: <Profile_PicUser />,
      },
    ],
  },
];

export default UserRoutes;
