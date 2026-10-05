import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

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
            }
        ]
    },
]);