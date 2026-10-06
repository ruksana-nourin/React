import { createBrowserRouter } from "react-router";

import ManageUser from "./pages/user/ManageUser";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/users",
                element: <ManageUser />,
            }
        ]
    },
]);