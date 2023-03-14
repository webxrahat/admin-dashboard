import React from 'react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation()
  return (
    <div>
      <h2 className='tittle'>Contact</h2>
      <p style={{fontSize:"14px"}}><span className='text-muted'>Home / pages</span> {location.pathname}</p>
    </div>
  );
};

export default Contact;