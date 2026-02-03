import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    Home,
    Docs,
    SignInPage,
    SignUpPage,
    DashboardOverview,
    Apis,
    Logs,
    Errors,
    Performance,
    Documentation,
    Alerts,
    ApiKeys,
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
        path: "/dashboard/apis",
        element: <Apis />,
    },
    {
        path: "/dashboard/logs",
        element: <Logs />,
    },
    {
        path: "/dashboard/errors",
        element: <Errors />,
    },
    {
        path: "/dashboard/performance",
        element: <Performance />,
    },
    {
        path: "/dashboard/documentation",
        element: <Documentation />,
    },
    {
        path: "/dashboard/alerts",
        element: <Alerts />,
    },
    {
        path: "/dashboard/api-keys",
        element: <ApiKeys />,
    },
    {
        path: "/dashboard/settings",
        element: <DashboardSettings />,
    },
])


export default AppRouter