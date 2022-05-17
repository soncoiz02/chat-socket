import { yupResolver } from "@hookform/resolvers/yup";
import { styled, Typography } from "@mui/material";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { userApi } from "../../api/user";
import LoadingButton from "../../components/form/LoadingButton";
import RHFTextField from "../../components/form/RHFTextField";

const FormGroup = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  width: 100%;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.user.infor);

  const loginSchema = yup.object().shape({
    username: yup
      .string()
      .trim()
      .required("Username is required!")
      .min(6, "Username must be at least 6 characters!"),
    password: yup
      .string()
      .trim()
      .required("Password is required!")
      .min(6, "Password must be at least 6 characters!"),
  });

  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = methods;

  const handleLogin: SubmitHandler<{ username: string; password: string }> = (
    data
  ) => {
    login(data);
  };

  const login = async (data: { username: string; password: string }) => {
    try {
      const response = await userApi.login(data);
      const user = await response.user;
      dispatch({
        type: "SET_USER_INFOR",
        payload: user,
      });
      navigate("/");
    } catch (error: any) {
      setError("username", { message: error.response.data.message });
    }
  };

  return (
    <FormProvider {...methods}>
      <FormGroup onSubmit={handleSubmit(handleLogin)}>
        <RHFTextField name="username" label="Enter your username" type="text" />
        <RHFTextField
          name="password"
          type="password"
          label="Enter your password"
        />
        <LoadingButton content="Login" isLoading={isSubmitting} />
      </FormGroup>
    </FormProvider>
  );
};

export default LoginForm;
