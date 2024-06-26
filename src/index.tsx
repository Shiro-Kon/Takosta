import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './Container/App/App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='bg-light-gray-green'>
  <BrowserRouter>
        <App />
      </BrowserRouter>
      </div>
  </React.StrictMode>
);


reportWebVitals();
