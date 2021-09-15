import { ReactElement } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { User } from '~/pages';

function AppRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={User.Patients} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
