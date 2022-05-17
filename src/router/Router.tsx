import React, { ElementType, lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Layout from "../Layout/MainLayout";
import CheckAuth from "./CheckAuth";

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
const ChooseAvatar = Loadable(lazy(() => import("../page/main/ChooseAvatar")));

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <CheckAuth>
              <Home />
            </CheckAuth>
          ),
        },
        {
          path: "chat/:id",
          element: (
            <CheckAuth>
              <ChatRoom />
            </CheckAuth>
          ),
        },
      ],
    },
    {
      path: "auth",
      element: <AuthLayout />,
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
      path: "avatar",
      element: (
        <CheckAuth>
          <ChooseAvatar />
        </CheckAuth>
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default Router;
