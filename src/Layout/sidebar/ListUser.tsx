import { Avatar, Box, Stack, styled, Typography } from "@mui/material";
import { blueGrey, green, grey } from "@mui/material/colors";
import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { USER_TYPE } from "../../@types/user";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { sortStr } from "../../utils/sortStr";

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

type PropsType = {
  listUsers: USER_TYPE[];
};

const socket = io("http://localhost:8000");

const ListUser = ({ listUsers }: PropsType) => {
  const currentUser = useSelector((state: any) => state.user.infor);
  const handleJoinRoom = (uid: string | undefined) => {
    const id = sortStr(uid + currentUser.id);
    socket.emit("join", { user: currentUser.username, roomId: id });
  };

  return (
    <Stack
      sx={{
        overflow: "auto",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 4,
        boxShadow: `0 5px 10px 1px rgba(0, 0, 0, 0.1)`,
        padding: "10px",
      }}
      direction="column"
      spacing={1}
    >
      {listUsers.map((user: USER_TYPE) => (
        <Item
          to={`/chat/${sortStr(user.id + currentUser.id)}`}
          key={user.id}
          onClick={() => handleJoinRoom(user.id)}
        >
          <CoverAvt>
            <Avatar
              sx={{
                width: 50,
                height: 50,
                border: "4px solid white",
                boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.1)",
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
