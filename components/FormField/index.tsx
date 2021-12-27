import { TextField } from '@mui/material';
import React from 'react';

interface FormFieldProps {
  name: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  return <TextField className="mb-20" name={name} label={label} size="small" fullWidth />;
};
