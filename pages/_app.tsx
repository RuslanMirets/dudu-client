import 'macro-css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { theme } from '../theme';
import { MuiThemeProvider } from '@material-ui/core';
import { wrapper } from '../redux/store';
import { Api } from '../utils/api';
import { setUserData } from '../redux/slices/user';

function App({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe();
    store.dispatch(setUserData(userData));
  } catch (err) {
    console.log(err);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
