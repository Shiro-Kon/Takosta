import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from '../../Page/Main';
import ProductPage from '../../Page/ProductPage';
import ProductDetailsPage from '../../Component/ProductPage/ProductDetails/ProductDetailsPage';
import DeliveryPaymentPage from '../../Page/DeliveryPaymentPage';
import ServicesPage from '../../Page/ServicesPage';
import CheckoutPage from '../../Page/CheckoutPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const NotFoundPage: React.FC = () => (
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-sage-green">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-olive-drab sm:text-5xl">Сторінку не знайдено</h1>
      <p className="mt-6 text-base leading-7 text-olive-drab">На жаль, нам не вдалося знайти сторінку, яку ви шукаєте.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"
          className="rounded-md bg-olive-drab px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-olive-drab/80"
        >
          Повернутися до головної
        </Link>
      </div>
    </div>
  </main>
);

const App: React.FC = () => {
  

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
