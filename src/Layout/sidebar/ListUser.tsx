import { Avatar, Stack, styled, Box, Typography } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

import { users } from "../../mock/user";

const Item = styled(Link)<LinkProps>(({ theme }) => ({
  display: "flex",
  gap: "0 10px",
  textDecoration: "none",
  padding: " 8px 10px",
  borderRadius: 5,
  ":hover": {
    backgroundColor: grey[200],
  },
}));
const CoverAvt = styled("div")`
  position: relative;
`;

const DetailUser = styled("div")`
  display: flex;
  flex-direction: column;
`;

const ListUser = () => {
  return (
    <Stack direction="column" spacing={1.5} height="100%" overflow="auto">
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
            <Typography variant="body1" color={grey[700]} fontWeight="bold">
              {user.username}
            </Typography>
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
