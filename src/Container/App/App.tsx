import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import LoadingScreen from '../../Component/LoadingProgress/LoadingProgress';
import { ErrorBoundary } from 'react-error-boundary';
import Blog from '../../Page/Blog';

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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Начинаем исчезновение
      setTimeout(() => setLoading(false), 500); // Убираем экран через 500ms
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      {loading && <LoadingScreen fadeOut={fadeOut} />}
      {!loading && (
        <>
          <Header />
          <main className="min-h-screen flex-grow">
            <Suspense fallback={<LoadingScreen fadeOut={false} />}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/product" element={<ProductPage />} />
                  <Route path="/product/:productId" element={<ProductDetailsPage />} />
                  <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </main>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

const ErrorFallback: React.FC<{ error: Error; resetErrorBoundary: () => void }> = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="p-4 bg-red-100 text-red-700">
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary} className="btn">
      Try again
    </button>
  </div>
);

export default App;
