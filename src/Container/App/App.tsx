import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../../Page/Main";
import Footer from "../Footer/Footer";
import ProductPage from "../../Page/ProductPage";
import DeliveryPaymentPage from "../../Page/DeliveryPaymentPage";
import ServicesPage from "../../Page/ServicesPage";
import ContactPage from "../../Page/ContactPage";



const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  return (
    <>
      <Header />
      
      <div className="m-[56px]">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/delivery-payment" element={<DeliveryPaymentPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
