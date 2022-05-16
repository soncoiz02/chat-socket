import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

type CheckAuthProps = {
  children: React.ReactNode;
};

const CheckAuth = ({ children }: CheckAuthProps) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth) {
    return <Navigate to={"/auth/login"} state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default CheckAuth;
