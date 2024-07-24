import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoadingScreen from '../../Component/LoadingScreen/LoadingScreen';

const Main = React.lazy(() => import('../../Page/Main'));
const ProductPage = React.lazy(() => import('../../Page/ProductPage'));
const ProductDetailsPage = React.lazy(() => import('../../Component/ProductPage/ProductDetails/ProductDetailsPage'));
const DeliveryPaymentPage = React.lazy(() => import('../../Page/DeliveryPaymentPage'));
const ServicesPage = React.lazy(() => import('../../Page/ServicesPage'));

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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
