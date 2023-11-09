import { ReactNode } from 'react';
import { RouterProvider } from 'react-router-dom';

import 'src/common_styles/common.scss';

import router from 'src/components/Router/Router';

const App = (): ReactNode => {
  return <RouterProvider router={router} />;
};

export default App;
