import styled from "@emotion/styled";
import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./sidebar/SideBar";

const AppStyle = styled("div")`
  display: flex;
  width: 100%;
  position: relative;
`;

const Layout = () => {
  return (
    <AppStyle>
      <SideBar />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </AppStyle>
  );
};

export default Layout;
