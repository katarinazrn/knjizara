import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.min.js';
import { BrowserRouter } from 'react-router-dom';
import { KorpaKontextProvider } from './store/korpa-kontekst';

ReactDOM.render(
  <KorpaKontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </KorpaKontextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
