import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    Home,
    Docs,
    SignInPage,
    SignUpPage,
    DashboardOverview,
    Analytics,
    Activity,
    Reports,
    DashboardSettings
} from "../Pages/index";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/signin",
        element: <SignInPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/docs",
        element: <Docs />,
    },
    {
        path: "/dashboard",
        element: <Navigate to="/dashboard/overview" replace />,
    },
    {
        path: "/dashboard/overview",
        element: <DashboardOverview />,
    },
    {
        path: "/dashboard/analytics",
        element: <Analytics />,
    },
    {
        path: "/dashboard/activity",
        element: <Activity />,
    },
    {
        path: "/dashboard/reports",
        element: <Reports />,
    },
    {
        path: "/dashboard/settings",
        element: <DashboardSettings />,
    },
])


export default AppRouter