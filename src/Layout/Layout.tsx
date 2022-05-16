import styled from "@emotion/styled";
import { Container } from "@mui/material";
import { cyan } from "@mui/material/colors";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "./sidebar/SideBar";

const AppStyle = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${cyan[50]};
  padding: 15px 0;
`;

const Main = styled("div")`
  display: flex;
  position: relative;
  width: 100%;
`;

const Layout = () => {
  return (
    <AppStyle>
      <Container maxWidth="xl">
        <Header />
        <Main>
          <SideBar />
          <Outlet />
        </Main>
      </Container>
    </AppStyle>
  );
};

export default Layout;
