import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

const Main = () => {
  return (

    <div>
      <Header />
      <div className='row'>
      <Sidebar />
      <div style={{background:"#f6f9ff"}} className='col-10'>
      <Outlet />
      </div>
      </div>
    </div>
  );
};

export default Main;