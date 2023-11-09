import { ReactNode } from 'react';
import 'src/common_styles/common.scss';
import { RouterProvider } from 'react-router-dom';
import router from 'src/components/Router/Router';

const App = (): ReactNode => {
  return <RouterProvider router={router} />;
};

export default App;
