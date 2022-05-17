import React from "react";
import { Typography, styled } from "@mui/material";
import RegisterForm from "../../sections/auth/RegisterForm";
import { Link } from "react-router-dom";
import { teal, grey } from "@mui/material/colors";

const CustomLink = styled(Link)`
  color: ${teal[500]};
  text-decoration: none;
`;

const Register = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          color: teal[500],
          fontWeight: "bold",
        }}
      >
        Register
      </Typography>
      <RegisterForm />
      <Typography
        variant="body2"
        sx={{
          color: grey[700],
          fontSize: "16px",
          marginTop: "auto",
        }}
      >
        You already have an Account?
        <CustomLink to="/auth/login"> Login</CustomLink>
      </Typography>
    </>
  );
};

export default Register;
