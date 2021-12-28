import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { Button, TextField } from '@material-ui/core';
import { FormField } from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Авторизация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField type="email" name="email" label="Почта" />
        <FormField type="password" name="password" label="Почта" />
        <Button
          className="mb-30"
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={!form.formState.isValid}>
          Войти
        </Button>
        <Button onClick={onOpenRegister} color="primary" variant="text">
          Регистрация
        </Button>
      </form>
    </FormProvider>
  );
};
