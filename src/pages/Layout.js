import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Footer } from '../navbar/Footer';
import { MobBottomNavbar } from '../navbar/MobBottomNavbar';
import { Navbar } from '../navbar/Navbar';
import { CollectionsAll } from './CollectionsAll';
import { Home } from './Home';
import { NoPage } from "./NoPage";
import { ProductPage } from './ProductPage';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/collections/all" element={<CollectionsAll />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
      <MobBottomNavbar />
    </>
  )
}


