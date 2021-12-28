import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
  type: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, type, label }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      className="mb-20"
      type={type}
      name={name}
      size="small"
      label={label}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      fullWidth
    />
  );
};
