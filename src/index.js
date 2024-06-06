// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot is used for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
