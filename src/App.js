import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import AppGrid from "./Components/Main/AppGrid/AppGrid";
import ProductGrid from "./Components/Products/ProductGrid";
import FormA from "./Components/Forms/FormDistri";




function App() {
  return (
    <>
    
    <NavBar />

    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/productos" element={<ProductGrid />} />
      <Route path="/distribuir" element={<FormA />} />
    </Routes>
    
    </>

  );
}


export default App;
