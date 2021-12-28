import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { Button } from '@material-ui/core';
import { FormField } from '../../FormField';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Регистрация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField type="text" name="firstName" label="Имя" />
        <FormField type="text" name="lastName" label="Фамилия" />
        <FormField type="email" name="email" label="Почта" />
        <FormField type="password" name="password" label="Пароль" />
        <Button
          className="mb-30"
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={!form.formState.isValid}>
          Регистрация
        </Button>
        <div className="d-flex align-center">
          Есть аккаунт?
          <Button className="ml-20" onClick={onOpenLogin} color="primary" variant="text">
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
