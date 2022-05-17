import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/form/RHFTextField";
import LoadingButton from "../../components/form/LoadingButton";
import { styled } from "@mui/material";
import { userApi } from "../../api/user";
import { setUserInfor } from "../../redux/actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const FormGroup = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  width: 100%;
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerSchema = yup.object().shape({
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
    confirmPassword: yup
      .string()
      .trim()
      .oneOf([yup.ref("password")], "Passwords not match!"),
  });

  const methods = useForm({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const {
    reset,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const handleRegister: SubmitHandler<{
    username: string;
    password: string;
    confirmPassword: string;
  }> = (data) => {
    register(data);
  };

  const register = async (data: { username: string; password: string }) => {
    try {
      const response = await userApi.createUser(data);
      const user = await response.user;
      if (!!user) {
        console.log(user);
        dispatch({
          type: "SET_USER_INFOR",
          payload: user,
        });
        navigate("/avatar");
      } else {
        const errorMessage = response.response.data.message;
        setError("username", { message: errorMessage });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <FormGroup onSubmit={handleSubmit(handleRegister)}>
        <RHFTextField name="username" label="Enter your username" type="text" />
        <RHFTextField
          name="password"
          type="password"
          label="Enter your password"
        />
        <RHFTextField
          name="confirmPassword"
          type="password"
          label="Confirm your password"
        />
        <LoadingButton isLoading={isSubmitting} content="Register" />
      </FormGroup>
    </FormProvider>
  );
};

export default RegisterForm;
