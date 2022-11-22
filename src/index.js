import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  AuthProvider from './AuthContext/authContext'
import { StrictMode } from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <StrictMode>
      <App />
      </StrictMode>
    </AuthProvider>
  </BrowserRouter>
);
