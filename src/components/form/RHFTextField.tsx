import { styled, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type PropsType = {
  name: string;
  type: string;
  label: string;
};

const CustomsTextField = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: teal[500],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: teal[500],
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "grey",
    },
    "&.Mui-focused fieldset": {
      borderColor: teal[500],
    },
  },
}));

const RHFTextField = ({ name, type, label }: PropsType) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <CustomsTextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          type={type}
          variant="outlined"
          label={label}
        />
      )}
    />
  );
};

export default RHFTextField;
