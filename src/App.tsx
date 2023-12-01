import { RouterProvider } from 'react-router-dom';
import { FC } from 'react';

import router from '@src/Router/Router';

const App: FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
