import React from "react";


import Dashboard from "../pages/AdminPage/dashboard";
import Tugas from "../pages/AdminPage/tugas";
import Users from "../pages/AdminPage/users";
import Kategori from "../pages/AdminPage/kategori";
import Mitra from "../pages/AdminPage/mitra";
import Kursus from "../pages/AdminPage/course";
import Daily from "../pages/AdminPage/daily";
import Monthly from "../pages/AdminPage/monthly";
import Breakdown from "../pages/AdminPage/breakdown";
import Admin from "../pages/AdminPage/admin";
import Mentor from "../pages/AdminPage/mentor";
import Live from "../pages/AdminPage/live";
import Session from "../pages/AdminPage/session";
import updateUser from "../pages/AdminPage/users/updateUser";
import Nilai from "../pages/AdminPage/nilai";
import Sertifikat from "../pages/AdminPage/sertifikat";

const AdminRoutes = [
    {
        name: "Dashboard Admin",
        path: "/admin",
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/course",
                element: <Kursus />,
            },
            {
                path: "/users",
                children: [
                    {
                        path: "",
                        element: <Users />,
                    },
                ]
                
            },
            {
                path: "/kategori",
                element: <Kategori />,
            },
            {
                path: "/mitra",
                element: <Mitra />,
            },
            {
                path: "/session",
                element: <Session />,
            },
            {
                path: "/livestreaming",
                element: <Live />,
            },
            {
                path: "/tugas",
                element: <Tugas />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/mentor",
                element: <Mentor />,
            },
            {
                path: "/nilai",
                element: <Nilai />,
            },
            {
                path: "/sertifikat",
                element: <Sertifikat />,
            },
        ]
        
    }
]

export default AdminRoutes;