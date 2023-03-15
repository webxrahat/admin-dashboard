import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Accordion = () => {
  const location = useLocation()

  return (
    <div>
      <h2 className='tittle'>Accordion</h2>
      <p style={{fontSize:"14px"}}><span className='text-muted'><Nav.Link className='d-inline-block text-secondary' as={Link} to="/">Home</Nav.Link> / Components /</span> {location.pathname.slice(11, 21)}</p>
      <div style={{height:"80vh"}} className='shadow rounded-1 p-3 text-center bg-white'>
      <h2 className='tittle'>This is Accordion</h2>
     </div>
    </div>
  );
};

export default Accordion;