import React from "react";
import Header from "../Header/Header";

import { Route, Routes } from "react-router-dom";
import Main from "../../Page/Main";
import Footer from "../Footer/Footer";

type Props = {};

const App = (props: Props) => {
  return (
    <>
    <Header/>
    <div className="m-[56px]">
      <Routes >
        <Route path="/" element={<Main />} />
      </Routes>
      </div>
      <Footer />
    </>
   
  );
};

export default App;
