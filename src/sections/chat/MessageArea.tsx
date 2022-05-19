import { Box, Stack, styled, Typography } from "@mui/material";
import { blueGrey, grey, teal } from "@mui/material/colors";
import React, { useState } from "react";
import { USER_TYPE } from "../../@types/user";
import { messages } from "../../mock/listMess";

const MessItem = styled("div")`
  display: flex;
  align-items: center;
  gap: 0 10px;
  max-width: 100%;
`;

const MessageArea = () => {
  const [currentUser, setCurrentUser] = useState<USER_TYPE>({
    id: "soncoiz02",
    username: "Soncoiz",
    avatar:
      "https://img.freepik.com/free-vector/cute-elephant-sitting-waving-hand-cartoon-vector-icon-illustration_138676-2220.jpg?t=st=1652672879~exp=1652673479~hmac=28a2e6a7803d08964262c5c265834d0c70be4dad006f34241143cfdf8cc3c9f4&w=740",
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: 3,
        boxShadow: "0 5px 10px 1px rgba(0, 0, 0, 0.1)",
        padding: "15px",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          height: "calc(100% - 70px)",
          overflowY: "auto",
        }}
        direction="column"
        spacing={2}
      >
        {messages.reverse().map((message) => (
          <>
            {message.sender === currentUser.id ? (
              <MessItem key={message.id}>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    padding: "8px 15px",
                    borderRadius: 50,
                    maxWidth: "80%",
                    backgroundColor: teal[500],
                    marginLeft: "auto",
                  }}
                >
                  {message.content}
                </Typography>
              </MessItem>
            ) : (
              <MessItem key={message.id}>
                <Typography
                  variant="body1"
                  sx={{
                    color: blueGrey[700],
                    padding: "8px 15px",
                    borderRadius: 50,
                    maxWidth: "80%",
                    backgroundColor: grey[200],
                  }}
                >
                  {message.content}
                </Typography>
              </MessItem>
            )}
          </>
        ))}
      </Stack>
    </Box>
  );
};

export default MessageArea;
