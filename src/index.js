import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const firebaseConfig = {
  apiKey: "AIzaSyAPrMQK2v6pXIvTDjcV_NKtZxLmQdyrVyQ",
  authDomain: "pointhshoes.firebaseapp.com",
  projectId: "pointhshoes",
  storageBucket: "pointhshoes.appspot.com",
  messagingSenderId: "121445934795",
  appId: "1:121445934795:web:eedec43555b86ff3ad1d4e"
};


initializeApp(firebaseConfig);