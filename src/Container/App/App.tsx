import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "../../Page/Main";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="font-sans">
    <Header/>
    <div className="m-[56px]">
      <Routes >
        <Route path="/" element={<Main />} />
      </Routes>
      </div>
       <Footer/>
    </div>
   
  );
};

export default App;
