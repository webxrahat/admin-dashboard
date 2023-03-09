import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

const Main = () => {
  const [sidebarOpen, setSideBarOpen] = useState(true)

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen)
    // console.log("click");
  }

  return (
    <div>
      <Header handleViewSidebar={handleViewSidebar} />
      <div className='d-flex'>
        <Sidebar sidebarOpen={sidebarOpen}/>
        <div style={{ backgroundColor: "#f6f9ff", marginTop: "50px", padding: "50px", width: "100vw", height: "93vh" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;