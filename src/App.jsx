// import { useState } from 'react'
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import Navigation from "./components/Navigation";
// import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShopPage" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
