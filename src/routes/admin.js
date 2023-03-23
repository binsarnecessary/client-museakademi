import React from "react";


import Dashboard from "../pages/AdminPage/dashboard";
import Products from "../pages/AdminPage/products";
import Customers from "../pages/AdminPage/customers";
import Transactions from "../pages/AdminPage/transactions";
import Geography from "../pages/AdminPage/geography";
import Overview from "../pages/AdminPage/overview";
import Daily from "../pages/AdminPage/daily";
import Monthly from "../pages/AdminPage/monthly";
import Breakdown from "../pages/AdminPage/breakdown";
import Admin from "../pages/AdminPage/admin";
import Performance from "../pages/AdminPage/performance";

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
                element: <Products />,
            },
            {
                path: "/mentors",
                element: <Customers />,
            },
            {
                path: "/payments",
                element: <Transactions />,
            },
            {
                path: "/geography",
                element: <Geography />,
            },
            {
                path: "/kursus",
                element: <Overview />,
            },
            {
                path: "/schedule",
                element: <Daily />,
            },
            {
                path: "/livestreaming",
                element: <Monthly />,
            },
            {
                path: "/breakdown",
                element: <Breakdown />,
            },
            {
                path: "/admin",
                element: <Admin />,
            },
            {
                path: "/performance",
                element: <Performance />,
            }
        ]
        
    }
]

export default AdminRoutes;