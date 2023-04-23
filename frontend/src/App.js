import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./App.css";

//basic imports
import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";


//User imports


//store imports



function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Navigator />
   
   

      <Footer />
    </BrowserRouter>
  );
}

export default App;
