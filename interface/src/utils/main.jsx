import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import { RouterProvider } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import { router } from '../routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyles />,
    <ToastContainer autoClose={2000} theme='colored' />
  </React.StrictMode>,
)

