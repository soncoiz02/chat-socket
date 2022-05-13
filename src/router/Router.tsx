import React, { ElementType, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../Layout/Layout";

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("../page/main/Home")));
const ChatRoom = Loadable(lazy(() => import("../page/main/ChatRoom")));
const Login = Loadable(lazy(() => import("../page/auth/Login")));
const Register = Loadable(lazy(() => import("../page/auth/Register")));
const NotFound = Loadable(lazy(() => import("../page/NotFound")));

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "chat/:id",
          element: <ChatRoom />,
        },
      ],
    },
    {
      path: "auth",
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Router;
