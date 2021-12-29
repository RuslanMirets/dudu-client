import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import { Button } from '@material-ui/core';
import { FormField } from '../../FormField';
import { UserApi } from '../../../utils/api';
import { LoginDto } from '../../../utils/api/types';
import { setCookie } from 'nookies';
import Alert from '@mui/material/Alert';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/slices/user';

interface LoginFormProps {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();

  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (error: any) {
      console.warn('Login error', error);
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <h2 className="text-center mb-30">Авторизация</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField type="email" name="email" label="Почта" />
        <FormField type="password" name="password" label="Почта" />
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
          Войти
        </Button>
        <Button onClick={onOpenRegister} color="primary" variant="text">
          Регистрация
        </Button>
      </form>
    </FormProvider>
  );
};
