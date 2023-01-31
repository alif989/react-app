import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppA from './AppA';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
    <App />
);
root2.render(
    <AppA />
);

reportWebVitals();
