import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import './fonts/Gopher-Bold.ttf';
import './fonts/Gopher-Italic.ttf';
import './fonts/Gopher-Regular.ttf';
import './fonts/SpaceMono-Regular.ttf';
import './fonts/SpaceMono-Bold.ttf';
import './fonts/SpaceMono-Italic.ttf';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
