import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import UserManage from "./views/pages/users/UserManage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <UserManage />,
      },
    ]
  },
]);
export default routes