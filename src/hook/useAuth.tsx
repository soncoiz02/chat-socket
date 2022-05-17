import React from "react";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state: any) => state.user.infor);
  if (user.id) return false;
  return true;
};

export default useAuth;
