import { ReactElement } from 'react';

import Elements from './base/elements';
import Reset from './generic/reset';
import 'react-toastify/dist/ReactToastify.min.css';

function GlobalStyles(): ReactElement {
  return (
    <>
      <Reset />
      <Elements />
    </>
  );
}

export default GlobalStyles;
