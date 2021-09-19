import { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';
import { AppRoutes } from '~/routes';
import theme from '~/styles/settings/theme';
import GlobalStyles from './styles';

function App(): ReactElement {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppRoutes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
