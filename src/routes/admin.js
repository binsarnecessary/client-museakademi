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
                path: "/products",
                element: <Products />,
            },
            {
                path: "/customers",
                element: <Customers />,
            },
            {
                path: "/transactions",
                element: <Transactions />,
            },
            {
                path: "/geography",
                element: <Geography />,
            },
            {
                path: "/overview",
                element: <Overview />,
            },
            {
                path: "/daily",
                element: <Daily />,
            },
            {
                path: "/monthly",
                element: <Monthly />,
            },
            {
                path: "/breakdown",
                element: <Breakdown />,
            },
            {
                path: "list-admin",
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