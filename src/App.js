import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import FormA from "./Components/Forms/FormDistri";

import ProductGrid from "./Components/Products/ProductGrid";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SingIn";




function App() {
  return (
    <>
    <UserAuthContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/productos" element={<ProductGrid />} />
        <Route path="/distribuir" element={<FormA />} />
        {/*<Route path="/SignUp" element={<SignUp />} />*/}
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </UserAuthContextProvider>
    </>

  );
}


export default App;
