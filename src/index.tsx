import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createAppRouter } from './router';
import {store} from './store';
import ErrorMessage from './components/error-message/ErrorMessage';
import {checkAuthAction} from './api/api-actions';

store.dispatch(checkAuthAction());

const router = createAppRouter();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
