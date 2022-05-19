import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import { Button, styled } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import Picker from "emoji-picker-react";
import React, { useState } from "react";

const FormWrapper = styled("form")`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

const InputField = styled("input")`
  width: 100%;
  padding: 18px 20px;
  border-radius: 50px;
  background-color: ${grey[200]};
  outline: none;
  border: none;
  font-size: 14px;
  color: ${grey[700]};
`;

const SendButton = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 50,
  width: 50,
  height: 50,
  borderRadius: "50%",
  backgroundColor: teal[500],
  padding: 0,
  boxShadow: `0 5px 10px 1px rgba(0, 0, 0, 0.1)`,
  "&:hover": {
    backgroundColor: teal[400],
  },
}));

const IconPicker = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 10px;
`;

const InputWrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
`;

const MessForm = () => {
  const [openIconPicker, setOpenIconPicker] = useState(false);

  const onEmojiClick = (event: any, emoji: any) => {
    console.log(emoji.emoji);
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <InputField placeholder="Type a message" />
        <IconPicker onClick={() => setOpenIconPicker(!openIconPicker)}>
          <InsertEmoticonIcon
            sx={{
              color: teal[500],
              fontSize: 30,
            }}
          />
        </IconPicker>
      </InputWrapper>
      {openIconPicker && (
        <Picker
          onEmojiClick={onEmojiClick}
          pickerStyle={{
            position: "absolute",
            bottom: "80px",
            right: "100px",
          }}
        />
      )}
      <SendButton type="submit">
        <SendIcon
          sx={{
            color: "white",
            fontSize: 20,
          }}
        />
      </SendButton>
    </FormWrapper>
  );
};

export default MessForm;
