import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

const Main = () => {
  const [sidebarOpen, setSideBarOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(true)
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [collapse, setCollapse] = useState(false)


  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen)
    // console.log("click");
  }
  const handleViewProfile = () => {
    setProfileOpen(!profileOpen)
  }
  const handleViewNotification = () => {
    setNotificationOpen(!notificationOpen)
    // console.log(notificationOpen, "click");
  }
  const handleCollapse = () =>{
    setCollapse(!collapse)
    // console.log(collapse);
  }
  return (
    <div>
      <Header handleViewSidebar={handleViewSidebar} handleViewNotification={handleViewNotification} notificationOpen={notificationOpen} handleViewProfile={handleViewProfile} profileOpen={profileOpen} sidebarOpen={sidebarOpen} />
      <div className='d-flex'>
        <Sidebar sidebarOpen={sidebarOpen} handleCollapse={handleCollapse} collapse={collapse}/>
        <div style={{ backgroundColor: "#f6f9ff", marginTop: "50px", padding: "30px", width: "100vw", height: "93vh" }}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Main;