import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoadingScreen from '../../Component/LoadingProgress/LoadingProgress';

const Main = lazy(() => import('../../Page/Main'));
const ProductPage = lazy(() => import('../../Page/ProductPage'));
const ProductDetailsPage = lazy(() => import('../../Component/ProductPage/ProductDetails/ProductDetailsPage'));
const DeliveryPaymentPage = lazy(() => import('../../Page/DeliveryPaymentPage'));
const ServicesPage = lazy(() => import('../../Page/ServicesPage'));
const CheckoutPage = lazy(() => import('../../Page/CheckoutPage'));
const NotFoundPage = lazy(() => import('../../Page/NotFoundPage'));

const App: React.FC = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true); // Manage loading state
  
  useEffect(() => {
  // Scroll page up when route changes
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  useEffect(() => {
  // Simulate loading delay (e.g. when site first loads)
  const timer = setTimeout(() => {
  setLoading(false); // Hide loading screen
  }, 1500); // Delay for 1.5 seconds
  
  return () => clearTimeout(timer); // Clear timer
  }, []);
  
  if (loading) {
  return <LoadingScreen />; // Show loading screen until site is loaded
  }
  return (
    <>
      <Header />
      <main className="min-h-screen">
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
