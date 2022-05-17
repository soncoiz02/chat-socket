import { yupResolver } from "@hookform/resolvers/yup";
import { Button, styled, TextField } from "@mui/material";
import React from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
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
      .required({ message: "Username is required!" })
      .min(6, { message: "Username must be at least 6 characters!" }),
    password: yup
      .string()
      .trim()
      .required({ message: "Password is required!" })
      .min(6, { message: "Password must be at least 6 characters!" }),
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
    control,
  } = methods;

  const handleLogin: SubmitHandler<{ username: string; password: string }> = (
    data
  ) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <FormGroup onSubmit={handleSubmit(handleLogin)}>
        <RHFTextField
          name="username"
          label="Enter your username"
          control={control}
          type="text"
          error={errors.username}
        />
        <RHFTextField
          name="password"
          control={control}
          type="password"
          label="Enter your password"
          error={errors.password}
        />
        <LoadingButton content="Login" isLoading={isSubmitting} />
      </FormGroup>
    </FormProvider>
  );
};

export default LoginForm;
