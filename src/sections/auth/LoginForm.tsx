import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/material";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
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
    console.log(data);
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
