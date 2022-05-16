import { styled } from "@mui/material";
import React from "react";
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
  return (
    <SideBarStyle>
      <SearchBar />
      <ListUser />
    </SideBarStyle>
  );
};

export default SideBar;
