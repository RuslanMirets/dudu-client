import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Авторизация</h2>
      <form>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <Button className="mb-30" type="submit" color="primary" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
      <div className="d-flex">
        <div className="ml-10 cu-p" onClick={onOpenRegister}>
          Регистрация
        </div>
      </div>
    </FormProvider>
  );
};
