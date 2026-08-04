import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashboard from "./views/pages/Dashboard";
import UserManage from "./views/pages/users/UserManage";
import UserCreate from "./views/pages/users/UserCreate";
import NotFound from "./views/pages/NotFound";
import Login from "./views/pages/auth/Login";
import UserEdit from "./views/pages/users/UserEdit";
import UserDetail from "./views/pages/users/UserDetail";
import PostManage from "./views/pages/post/PostManage";
import PostCreate from "./views/pages/post/PostCreate";
import PostEdit from "./views/pages/post/PostEdit";
import PostDetail from "./views/pages/post/PostDetail";

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
        {
          path: "/add-user",
          element: <UserCreate />,
        },
        {
          path: "/user-edit/:id",
          element: <UserEdit />,
        },
        {
          path: "/user-detail/:id",
          element: <UserDetail />,
        },
        {
          path: "/post",
          element: <PostManage />,
        },
        {
          path: "/post-create",
          element: <PostCreate />,
        },
        {
          path: "/post-edit/:id",
          element: <PostEdit />,
        },
        {
          path: "/post-detail/:id",
          element: <PostDetail />,
        },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);
export default routes