import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoadingScreen from '../../Component/LoadingProgress/LoadingProgress';
import { ErrorBoundary } from 'react-error-boundary';
import { useDeferredValue } from 'react';

const Main = lazy(() => import('../../Page/Main'));
const ProductPage = lazy(() => import('../../Page/ProductPage'));
const ProductDetailsPage = lazy(() => import('../../Component/ProductPage/ProductDetails/ProductDetailsPage'));
const DeliveryPaymentPage = lazy(() => import('../../Page/DeliveryPaymentPage'));
const ServicesPage = lazy(() => import('../../Page/ServicesPage'));
const CheckoutPage = lazy(() => import('../../Page/CheckoutPage'));
const NotFoundPage = lazy(() => import('../../Page/NotFoundPage'));

const App: React.FC = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const deferredPathname = useDeferredValue(pathname);

  useEffect(() => {
    window.scrollTo({ top: -20, behavior: 'smooth' });
  }, [deferredPathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Delay for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />; // Show loading screen until site is loaded
  }



  const handlePageLoaded = () => {
    // Отключаем загрузочный экран после полной загрузки
    setLoading(false);
  };

  return (
    <>
     {loading && <LoadingScreen />} 
      <Header />
      <main className="min-h-screen flex-grow">
        <Suspense fallback={<LoadingScreen />}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
            <Route path="/" element={<Main onLoaded={handlePageLoaded} />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:productId" element={<ProductDetailsPage />} />
              <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

export default App;
