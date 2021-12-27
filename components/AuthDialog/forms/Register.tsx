import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import { Button } from '@material-ui/core';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Регистрация</h2>
      <form>
        <FormField name="firstName" label="Имя" />
        <FormField name="lastName" label="Фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <Button className="mb-30" type="submit" color="primary" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
      <div className="d-flex">
        Есть аккаунт?
        <div className="ml-10 cu-p" onClick={onOpenLogin}>
          Войти
        </div>
      </div>
    </FormProvider>
  );
};
