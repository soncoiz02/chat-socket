import { Box } from "@mui/material";
import { cyan } from "@mui/material/colors";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: cyan[50],
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "30px",
          width: "500px",
          height: "550px",
          boxShadow: "0 5px 10px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayout;
