import { createBrowserRouter } from "react-router-dom";
import {Home,AuthPage,Docs} from "../Pages/index";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
    {
        path: "/docs",
        element: <Docs />,
    },
])

export default AppRouter