import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Button, styled, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserWrapper = styled("div")`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  gap: 0 5px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ActionWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 0 5px;
`;

const HomeIconBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  transition: 0.3s;
  &:hover {
    background-color: white;
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
  }
`;

const LogoutButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  transition: 0.3s;
  &:hover {
    background-color: white;
    box-shadow: 0px 3px 10px 1px rgba(0, 0, 0, 0.1);
  }
`;

const Header = () => {
  const currentUser = useSelector((state: any) => state.user.infor);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <UserWrapper>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            border: "4px solid white",
            boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.1)",
          }}
          src={currentUser.avatar}
        />
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "bold",
            color: blueGrey[600],
          }}
        >
          {currentUser.username}
        </Typography>
      </UserWrapper>
      <ActionWrapper>
        <HomeIconBtn to="/">
          <HomeIcon
            sx={{
              color: blueGrey[700],
              fontSize: 25,
            }}
          />
        </HomeIconBtn>
        <LogoutButton>
          <LogoutIcon
            sx={{
              color: blueGrey[700],
              fontSize: 25,
            }}
          />
        </LogoutButton>
      </ActionWrapper>
    </Box>
  );
};

export default Header;
