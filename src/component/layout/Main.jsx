import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';

const Main = () => {
  return (
    <Container fluid>
      <Header />
      <div className='row'>
      <Sidebar />
      <div style={{backgroundColor:"#f6f9ff", marginTop:"30px", paddingTop:"50px"}} className='col-10'>
      <Outlet />
      </div>
      </div>
    </Container>
  );
};

export default Main;