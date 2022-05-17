import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { USER_TYPE } from "../../@types/user";
import { userApi } from "../../api/user";
import ListUser from "./ListUser";
import SearchBar from "./SearchBar";

const SideBarStyle = styled("div")`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 350px;
  height: 100%;
  gap: 30px 0;
  z-index: 999;
`;

const SideBar = () => {
  const [listUsers, setListUsers] = useState<USER_TYPE[]>([]);
  const getListUsers = async () => {
    try {
      const users = await userApi.getAllUser();
      if (users) setListUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListUsers();
  }, []);
  return (
    <SideBarStyle>
      <SearchBar updateListUser={setListUsers} />
      <ListUser listUsers={listUsers} />
    </SideBarStyle>
  );
};

export default SideBar;
