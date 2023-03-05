import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

const Main = () => {
  return (

    <div>
      <Header />
      <Outlet />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Main;