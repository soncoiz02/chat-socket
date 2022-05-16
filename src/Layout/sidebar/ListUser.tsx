import { Avatar, Stack, styled, Box, Typography } from "@mui/material";
import { blueGrey, green, grey, pink } from "@mui/material/colors";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { users } from "../../mock/user";

const Item = styled(Link)<LinkProps>(({ theme }) => ({
  position: "relative",
  display: "flex",
  gap: "0 10px",
  textDecoration: "none",
  padding: "10px",
  transition: "0.3s",
  borderRadius: "10px",
  "&:hover": {
    background: "rgba(0,0,0,0.05)",
  },
}));

const CoverAvt = styled("div")`
  position: relative;
`;

const DetailUser = styled("div")`
  display: flex;
  flex-direction: column;
  width: calc(100% - 60px);
`;

const HeaderUser = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ListUser = () => {
  return (
    <Stack
      sx={{
        overflow: "auto",
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 4,
        boxShadow: `0 5px 10px 1px rgba(0, 0, 0, 0.1)`,
        padding: "10px",
      }}
      direction="column"
      spacing={1}
    >
      {users.map((user) => (
        <Item to={`/chat/${user.id}`} key={user.id}>
          <CoverAvt>
            <Avatar
              sx={{
                width: 50,
                height: 50,
              }}
              src={user.avatar}
            />
            <Box
              sx={{
                width: 15,
                height: 15,
                backgroundColor: green[500],
                borderRadius: "50%",
                position: "absolute",
                bottom: 0,
                right: 0,
                border: "2px solid white",
              }}
            ></Box>
          </CoverAvt>
          <DetailUser>
            <HeaderUser>
              <Typography
                variant="body1"
                color={blueGrey[700]}
                fontWeight="bold"
              >
                {user.username}
              </Typography>
              <Typography variant="body2" fontWeight="bold" color={grey[700]}>
                09:00
              </Typography>
            </HeaderUser>
            <Typography variant="body2" color={grey[500]}>
              You: sdadsadsadsa
            </Typography>
          </DetailUser>
        </Item>
      ))}
    </Stack>
  );
};

export default ListUser;
