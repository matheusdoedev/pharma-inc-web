import { ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import { AppRoutes } from '~/routes';
import theme from '~/styles/settings/theme';
import GlobalStyles from './styles';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
