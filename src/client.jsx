import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.querySelector('#root')) 
