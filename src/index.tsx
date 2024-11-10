import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App/App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './Component/CartPage/CartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BrowserRouter>
);
