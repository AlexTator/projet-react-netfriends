import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./app/pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Account from "./app/pages/Account";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/account" element={ <Account />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
