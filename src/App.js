import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import AppGrid from "./Components/Main/AppGrid/AppGrid";
import ProductGrid from "./Components/Products/ProductGrid";




function App() {
  return (
    <>
    <NavBar />
    <Main/>
    <ProductGrid />
    </>
  );
}


export default App;
