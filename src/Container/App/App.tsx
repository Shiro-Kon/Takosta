import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../../Page/Main";
import Footer from "../Footer/Footer";
import ProductPage from "../../Page/ProductPage";
import DeliveryPaymentPage from "../../Page/DeliveryPaymentPage";
import ServicesPage from "../../Page/ServicesPage";
import ContactPage from "../../Page/ContactPage";
import NotFoundPage from "../../Page/EmptyPage";

type PageStatus = {
  [key: string]: boolean;
};

const App = () => {
  const [pageStatus, setPageStatus] = useState<PageStatus>({
    main: true,
    product: false,
    deliveryPayment: false,
    services: false,
    contact: false,
  });

  useEffect(() => {
    setPageStatus((prevStatus) => ({
      ...prevStatus,
      main: true,
    }));
  }, []);

  return (
    <>
      <Header />
      <div className="m-[56px]">
        <Routes>
          <Route
            path="/"
            element={pageStatus.main ? <Main /> : <NotFoundPage />}
          />
          <Route
            path="/product"
            element={pageStatus.product ? <ProductPage /> : <NotFoundPage />}
          />
          <Route
            path="/delivery-payment"
            element={
              pageStatus.deliveryPayment ? (
                <DeliveryPaymentPage />
              ) : (
                <NotFoundPage />
              )
            }
          />
          <Route
            path="/services"
            element={pageStatus.services ? <ServicesPage /> : <NotFoundPage />}
          />
          <Route
            path="/contact"
            element={pageStatus.contact ? <ContactPage /> : <NotFoundPage />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
