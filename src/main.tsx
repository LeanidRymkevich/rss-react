import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@src/styles/common.css';

import App from '@src/App';
import { setupStore } from '@src/store/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
