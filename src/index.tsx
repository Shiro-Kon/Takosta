import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App/App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Component/CartPage/CartContext';
import ScrollToTop from './Component/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);