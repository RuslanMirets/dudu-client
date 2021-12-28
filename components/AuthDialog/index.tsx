import { Dialog, DialogContent } from '@material-ui/core';
import { DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import styles from './AuthDialog.module.scss';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'login' | 'register'>('login');

  return (
    <Dialog open={visible} onClose={onClose} maxWidth="sm" fullWidth>
      <IconButton onClick={onClose}>
        <CloseIcon className="btn--close" />
      </IconButton>
      <DialogContent>
        {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
        {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
      </DialogContent>
    </Dialog>
  );
};
