import "bootstrap/dist/css/bootstrap.css";

import { Home } from "../pages/Home/Home";
import { Course } from "../pages/Kursus/Course";

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


const UserRoutes = [
  {
    name: "Home Page",
    path: "/",
    element: <Home />,
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
        element: <HelloDetail />
      }
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
    element: <BukaJadwal />
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
        // {
        //     name: "Profile User",
        //     path: "/profil-user",
        //     childen: [
        //         {
        //             path: "",
        //             element : 
        //         },
        //         {
        //             path: "/daftar-mentor",
        //             element:
        //         },
        //         {
        //             path: "change-password",
        //             element:
        //         },
        //                 ]
        // }
    ]
  }
];

export default UserRoutes;
