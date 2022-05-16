import { styled } from "@mui/material";
import React from "react";
import Header from "../../sections/chat/Header";
import MessageArea from "../../sections/chat/MessageArea";

const ChatRoomWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  width: 100%;
`;

const ChatRoom = () => {
  return (
    <ChatRoomWrapper>
      <Header />
      <MessageArea />
    </ChatRoomWrapper>
  );
};

export default ChatRoom;
