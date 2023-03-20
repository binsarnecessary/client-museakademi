import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

import Profile from "../pages/ProfileMentor/Profile";
import ChangePassword from "../pages/ProfileMentor/ChangePassword";
import DaftarMentor from "../pages/ProfileMentor/DaftarMentor";
import ProfilePic from "../pages/ProfileMentor/ProfilePic";
import DashboardMentor from "../pages/ProfileMentor/DashboardMentor";
import KursusMentor from "../pages/ProfileMentor/KursusMentor";
// import BukaJadwal from '../pages/Livestreaming/BukaJadwal';
// import StreamingMentor from '../pages/LiveMentor/StreamingMentor';

import ClassroomMentorDashboard from "../pages/ClassroomMentor/CLassroomMentorDashboard";
import ClassroomMentorClass from "../pages/ClassroomMentor/ClassroomMentorClass";
import ClassroomMentorTugas from "../pages/ClassroomMentor/ClassroomMentorTugas";
import ClassroomMentorLive from "../pages/ClassroomMentor/ClassroomMentorLive";
import ClassroomMentorSiswa from "../pages/ClassroomMentor/ClassroomMentorSiswa";
import ClassroomMentorEditTugas from "../pages/ClassroomMentor/ClassroomMentorEditTugas";
import LiveStreamingDetailById from '../pages/ClassroomMentor/LiveStreamingDetailById';
import ClassroomMentorSiswaPenilaian from '../pages/ClassroomMentor/ClassroomMentorSiswaPenilaian';


const MentorRoutes = [
  {
    name: "Dashboard Mentor",
    path: "/mentor",
    children : [
        {
            path: "/dashboard",
            element: <DashboardMentor />,
        },
        {
            path: "/course",
            element: <KursusMentor />
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
                    element: <ProfilePic />
                },
                {
                    path: "/daftar-mentor",
                    element: <DaftarMentor />,
                },
                {
                    path: "/change-password",
                    element: <ChangePassword />
                },
            ],
        },
        {
            name: "Classroom Mentor",
            path: "/classroom",
            children: [
                {
                    path: "",
                    element: <ClassroomMentorDashboard />,
                },
                {
                    path: "/class-mentor",
                    element: <ClassroomMentorClass />
                },
                {
                    path: "/tugas-mentor",
                    children: [
                        {
                            path: "",
                            element: <ClassroomMentorTugas />,
                        },
                        {
                            path: "/mentor-edit-tugas",
                            element: <ClassroomMentorEditTugas />
                        }
                    ]
                },
                {
                    path: "/live-mentor",
                    children: [
                        {
                            path: "",
                            element: <ClassroomMentorLive />,
                        },
                        {
                            path: "/live-detail-id",
                            element: <LiveStreamingDetailById />,
                        },
                    ],
                },
                {
                    path: "/siswa-mentor",
                    children: [
                        {
                            path: "",
                            element: <ClassroomMentorSiswa />,
                        },
                        {
                            path: "/penilaian",
                            element: <ClassroomMentorSiswaPenilaian />
                        }
                    ]
                },
            ]
        },
        // {
        //     path: "/livestreaming",
        //     children: [
        //         {
        //             path: "",
        //             element: <StreamingMentor />,
        //         },
        //         {
        //             path: "/bukajadwal",
        //             element: <BukaJadwal />
        //         }
        //     ]
        // }
    ]
  },

];

export default MentorRoutes;
