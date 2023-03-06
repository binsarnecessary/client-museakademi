import "bootstrap/dist/css/bootstrap.css";

import Profile from "../pages/ProfileMentor/Profile";
import ChangePassword from "../pages/ProfileMentor/ChangePassword";
import DaftarMentor from "../pages/ProfileMentor/DaftarMentor";
import Profile_Pic from "../pages/ProfileMentor/Profile_Pic";
import DashboardMentor from "../pages/ProfileMentor/DashboardMentor";
import KursusMentor from "../pages/ProfileMentor/KursusMentor";

import CM_Dashboard from "../pages/ClassroomMentor/CM_Dashboard";
import CM_Sesi1 from "../pages/ClassroomMentor/CM_Sesi1";
import CM_Tugas from "../pages/ClassroomMentor/CM_Tugas";
import CM_Live from "../pages/ClassroomMentor/CM_Live";
import CM_Live3 from "../pages/ClassroomMentor/CM_Live3";
import CM_Siswa from "../pages/ClassroomMentor/CM_Siswa";
import CM_Penilaian from "../pages/ClassroomMentor/CM_Penilaian";
import CM_TugasEdit from "../pages/ClassroomMentor/CM_TugasEdit";


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
                    element: <Profile_Pic />
                },
                {
                    path: "/daftar-mentor",
                    element: <DaftarMentor />,
                },
                {
                    path: "change-password",
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
                    element: <CM_Dashboard />,
                },
                {
                    path: "/class-mentor",
                    element: <CM_Sesi1 />
                },
                {
                    path: "/exam-mentor",
                    children: [
                        {
                            path: "",
                            element: <CM_Tugas />,
                        },
                        {
                            path: "/edit-exam-id",
                            element: <CM_TugasEdit />
                        }
                    ]
                },
                {
                    path: "/live-streaming",
                    children: [
                        {
                            path: "",
                            element: <CM_Live />,
                        },
                        {
                            path: "/detail-live-streaming-id",
                            element: <CM_Live3 />,
                        },
                    ],
                },
                {
                    path: "/list-user",
                    children: [
                        {
                            path: "",
                            element: <CM_Siswa />,
                        },
                        {
                            paht: "/evaluation",
                            element: <CM_Penilaian />
                        }
                    ]
                },
            ]
        },
    ]
  },

];

export default MentorRoutes;
