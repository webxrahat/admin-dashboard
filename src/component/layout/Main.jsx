import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Footer from '../pages/Footer';
import Navbar from '../pages/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Dashboard/>
      <Footer/>
    </div>
  );
};

export default Main;