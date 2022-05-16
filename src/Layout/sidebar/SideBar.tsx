import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  styled,
  Typography,
} from "@mui/material";
import { green, pink } from "@mui/material/colors";
import React from "react";
import ListUser from "./ListUser";
import SearchBar from "./SearchBar";

const SideBarStyle = styled("div")`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 300px;
  height: 100vh;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  gap: 30px 0;
  z-index: 999;
`;

const Detail = styled("div")`
  display: flex;
  flex-direction: column;
`;

const LogoutButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[600],
  "&:hover": {
    backgroundColor: pink[500],
    boxShadow: `0 0 10px 1px ${pink[200]}`,
  },
  padding: "5px 10px",
  fontSize: "0.8rem",
  textTransform: "none",
  alignSelf: "flex-start",
}));

const SideBar = () => {
  return (
    <SideBarStyle>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0 10px",
            width: "80%",
          }}
        >
          <Avatar
            src=""
            sx={{
              width: 50,
              height: 50,
            }}
          />
          <Detail>
            <Typography
              variant="subtitle1"
              component="div"
              fontWeight="bold"
              color={pink[800]}
            >
              Username
            </Typography>
            <Typography variant="subtitle2" component="div" color={green[500]}>
              Online
            </Typography>
          </Detail>
        </Box>
        <LogoutButton>Logout</LogoutButton>
      </Box>
      <SearchBar />
      <ListUser />
    </SideBarStyle>
  );
};

export default SideBar;
