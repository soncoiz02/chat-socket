import { Button, styled } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

type PropsType = {
  isLoading: boolean;
  content: string;
};

const CustomsButton = styled(Button)(({ theme }) => ({
  backgroundColor: teal[600],
  padding: "10px 25px",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: teal[500],
  },
}));

const LoadingButton = ({ isLoading, content }: PropsType) => {
  return (
    <CustomsButton variant="contained" type="submit">
      {content}
    </CustomsButton>
  );
};

export default LoadingButton;
