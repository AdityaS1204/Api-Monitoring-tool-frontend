import { createBrowserRouter } from "react-router-dom";
import { Home, Docs, SignInPage, SignUpPage } from "../Pages/index";

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
])


export default AppRouter