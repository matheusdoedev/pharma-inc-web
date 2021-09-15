import { ReactElement } from 'react';

import Elements from './base/elements';
import Reset from './generic/reset';

function GlobalStyles(): ReactElement {
  return (
    <>
      <Reset />
      <Elements />
    </>
  );
}

export default GlobalStyles;
