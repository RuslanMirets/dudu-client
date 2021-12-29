import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import { Button } from '@material-ui/core';
import { FormField } from '../../FormField';
import { UserApi } from '../../../utils/api';
import { CreateUserDto } from '../../../utils/api/types';
import { setCookie } from 'nookies';
import { Alert } from '@mui/material';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);
      console.log(data);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
    } catch (error) {
      console.warn('Ошибка при регистрации', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Регистрация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField type="text" name="firstName" label="Имя" />
        <FormField type="text" name="lastName" label="Фамилия" />
        <FormField type="email" name="email" label="Почта" />
        <FormField type="password" name="password" label="Пароль" />
        {errorMessage && (
          <Alert className="mb-20" severity="error">
            {errorMessage}
          </Alert>
        )}
        <Button
          className="mb-30"
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          disabled={!form.formState.isValid || form.formState.isSubmitting}>
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
