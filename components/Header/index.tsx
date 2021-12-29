import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthDialog } from '../AuthDialog';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectUserData, setUserData } from '../../redux/slices/user';
import { destroyCookie } from 'nookies';

export const Header: React.FC = () => {
  const userData = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  React.useEffect(() => {
    if (authVisible && userData) {
      setAuthVisible(false);
    }
  }, [authVisible, userData]);

  const logout = (data: any) => {
    destroyCookie(null, 'authToken', null);
    data = null;
    dispatch(setUserData(data));
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
              {userData ? (
                <>
                  <li>
                    <AccountCircleIcon />
                  </li>
                  <li onClick={logout}>
                    <LogoutIcon />
                  </li>
                </>
              ) : (
                <li onClick={openAuthDialog}>
                  <LoginIcon />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </header>
  );
};
