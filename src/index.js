import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getAuth } from "firebase/auth";
import { BrowserRouter, Router } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNZSB1KayvIi4e5gPHbcBW7IQ-gmV9-cs",
  authDomain: "entre-espigas.firebaseapp.com",
  projectId: "entre-espigas",
  storageBucket: "entre-espigas.appspot.com",
  messagingSenderId: "40847026902",
  appId: "1:40847026902:web:d75e3eb8e50d2344257777",
  measurementId: "G-YSSJ9CP707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

