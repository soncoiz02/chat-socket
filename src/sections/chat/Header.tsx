import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Button, styled, Typography } from "@mui/material";
import { blueGrey, green, grey } from "@mui/material/colors";
import React from "react";

const UserDetail = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ButtonSetting = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${grey[300]};
  }
`;

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "10px 20px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 3,
        boxShadow: `0 3px 10px 1px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0 10px",
        }}
      >
        <Avatar
          sx={{
            width: 50,
            height: 50,
          }}
          src="https://img.freepik.com/free-vector/cute-astronaut-catching-moon-cartoon-vector-icon-illustration_138676-3475.jpg?t=st=1652672879~exp=1652673479~hmac=ce996c81c20a4119d052d9705a897b6ec08e4ca10e068ab90c0aa0609ae559ca&w=740"
        />
        <UserDetail>
          <Typography
            variant="h6"
            sx={{
              color: blueGrey[700],
            }}
          >
            Username
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: grey[500],
              gap: "0 5px",
            }}
            variant="body2"
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: green[500],
              }}
            ></Box>
            Online
          </Typography>
        </UserDetail>
      </Box>
      <ButtonSetting>
        <MoreVertIcon
          sx={{
            color: blueGrey[700],
          }}
        />
      </ButtonSetting>
    </Box>
  );
};

export default Header;
