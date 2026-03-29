// src/layouts/DefaultLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CreateBlog from './CreateBlog'

export default function DefaultLayout() {
  return (
    <>
      {/* Header / Navbar */}
      <Navbar />
      
      {/* Main content area */}

      <Outlet/>
      
  
      <Footer />
    </>
  );
}
