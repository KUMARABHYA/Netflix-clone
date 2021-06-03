import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './stores/auth-context';


ReactDOM.render(
  <AuthContextProvider>

  
  <BrowserRouter>
    <App />
  </BrowserRouter>
   </AuthContextProvider>,
  
  document.getElementById('root')
);

reportWebVitals();
