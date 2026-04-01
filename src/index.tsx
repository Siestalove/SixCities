import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createAppRouter } from './router';
import {store} from './store';
import ErrorMessage from './components/error-message/ErrorMessage';
import {fetchOffersAction} from './api/api-actions';

const router = createAppRouter();

store.dispatch(fetchOffersAction());

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
