import { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import { AppRoutes } from '~/routes';
import theme from '~/styles/settings/theme';
import GlobalStyles from './styles';

function App(): ReactElement {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
