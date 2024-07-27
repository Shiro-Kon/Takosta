import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = lazy(() => import('../../Page/Main'));
const ProductPage = lazy(() => import('../../Page/ProductPage'));
const ProductDetailsPage = lazy(() => import('../../Component/ProductPage/ProductDetails/ProductDetailsPage'));
const DeliveryPaymentPage = lazy(() => import('../../Page/DeliveryPaymentPage'));
const ServicesPage = lazy(() => import('../../Page/ServicesPage'));
const CheckoutPage = lazy(() => import('../../Page/CheckoutPage'));
const NotFoundPage = lazy(() => import('../../Page/NotFoundPage'));

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
            <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;