import React, { Suspense, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoadingScreen from '../../Component/LoadingScreen/LoadingScreen';

const Main = React.lazy(() => import('../../Page/Main'));
const ProductPage = React.lazy(() => import('../../Page/ProductPage'));
const ProductDetailsPage = React.lazy(() => import('../../Component/ProductPage/ProductDetails/ProductDetailsPage'));
const DeliveryPaymentPage = React.lazy(() => import('../../Page/DeliveryPaymentPage'));
const ServicesPage = React.lazy(() => import('../../Page/ServicesPage'));

const App: React.FC = () => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        if (pageRef.current) {
          pageRef.current.scrollTop = 0;
        }
      }, 100);
    };

    scrollToTop();

    window.addEventListener('popstate', scrollToTop);

    return () => {
      window.removeEventListener('popstate', scrollToTop);
    };
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen" ref={pageRef}>
      <Header />
      <main className="flex-grow m-[56px]">
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:productId" element={<ProductDetailsPage />} />
            <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;