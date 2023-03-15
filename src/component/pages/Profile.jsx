import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation()
  // console.log(location);
  return (
    <div>
      <h2 className='tittle'>Profile</h2>
      <p style={{ fontSize: "14px" }}><span className='text-muted'><Nav.Link className='d-inline-block text-secondary' as={Link} to="/">Home</Nav.Link> /</span> {location.pathname.slice(6)}</p>
      <div style={{ height: "80vh" }} className='shadow rounded-1 p-3 text-center bg-white'>
        <h2 className='tittle'>This is Profile</h2>
      </div>
    </div>
  );
};

export default Profile;