import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <h2 className='tittle'>Dashboard</h2>
      <p style={{ fontSize: "14px" }}><span className='text-muted'><Nav.Link className='d-inline-block text-secondary' as={Link} to="/">Home</Nav.Link> / </span>dashboard</p>
      <div style={{ height: "80vh" }} className='shadow rounded-1 p-3 text-center bg-white'>
        <h2 className='tittle'>This is Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;