import React, { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import { ErrorBoundary } from "react-error-boundary";
import ScrollToTop from "../../Component/ScrollToTop/ScrollToTop";
import LoadingScreen from "../../Component/LoadingProgress/LoadingProgress";

const Main = lazy(() => import("../../Page/Main"));
const ProductPage = lazy(() => import("../../Page/ProductPage"));
const ProductDetailsPage = lazy(() => import("../../Component/ProductPage/ProductDetails/ProductDetailsPage"));
const DeliveryPaymentPage = lazy(() => import("../../Page/DeliveryPaymentPage"));
const ServicesPage = lazy(() => import("../../Page/ServicesPage"));
const CheckoutPage = lazy(() => import("../../Page/CheckoutPage"));
const Blog = lazy(() => import("../../Page/Blog"));
const BlogDetailsPage = lazy(() => import("../../Component/Blog/BlogDetailsPage"));
const NotFoundPage = lazy(() => import("../../Page/NotFoundPage"));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => setLoading(false), ); 
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen fadeOut={fadeOut} />}
      {!loading && (
        <>
          <Header />
          <ScrollToTop /> 
          <main className="min-h-screen flex-grow duration-300">
            <Suspense  fallback={<LoadingScreen fadeOut={false} />}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/product" element={<ProductPage />} />
                  <Route path="/product/:productId" element={<ProductDetailsPage />} />
                  <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:postId" element={<BlogDetailsPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </ErrorBoundary>
            </Suspense>
          </main>
        </>
      )}
    </>
  );
};

// Компонент для обработки ошибок
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
