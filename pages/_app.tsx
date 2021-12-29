import 'macro-css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </MuiThemeProvider>
  );
}

export default MyApp;
