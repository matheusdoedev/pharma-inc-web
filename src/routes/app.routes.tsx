import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '~/pages';

function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
