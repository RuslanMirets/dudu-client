import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthDialog } from '../AuthDialog';

export const Header: React.FC = () => {
  const isAuth = true;

  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.body}>
          <Link href="/">
            <a>DuDu</a>
          </Link>
          <nav className={styles.menu}>
            <ul>
              <Link href="/">
                <a>Главная</a>
              </Link>
              <Link href="/about">
                <a>О компании</a>
              </Link>
              <Link href="/contacts">
                <a>Контакты</a>
              </Link>
            </ul>
          </nav>
          <div className={styles.actions}>
            <ul>
              {isAuth ? (
                <li onClick={openAuthDialog}>
                  <LoginIcon />
                </li>
              ) : (
                <>
                  <li>
                    <AccountCircleIcon />
                  </li>
                  <li>
                    <LogoutIcon />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </header>
  );
};
