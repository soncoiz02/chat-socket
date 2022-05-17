import { Typography, styled } from "@mui/material";
import { teal, grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../sections/auth/LoginForm";

const CustomLink = styled(Link)`
  color: ${teal[500]};
  text-decoration: none;
`;

const Login = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: teal[500],
          fontWeight: "bold",
        }}
      >
        Login
      </Typography>
      <LoginForm />
      <Typography
        variant="body2"
        sx={{
          color: grey[700],
          fontSize: "16px",
          marginTop: "auto",
        }}
      >
        You don't have an Account?
        <CustomLink to="/auth/register"> Register</CustomLink>
      </Typography>
    </>
  );
};

export default Login;
