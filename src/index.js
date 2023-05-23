import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './vendors/daterangepicker/daterangepicker.css';
import './vendors/datatables.net-bs5/css/dataTables.bootstrap5.min.css';

import './vendors/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';

import './dist/css/style.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);