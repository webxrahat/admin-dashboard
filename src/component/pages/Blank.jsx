import React from 'react';
import { useLocation } from 'react-router-dom';

const Blank = () => {
  const location = useLocation()
  return (
    <div>
      <h2 className='tittle'>Blank</h2>
      <p style={{fontSize:"14px"}}><span className='text-muted'>Home / pages /</span> {location.pathname.slice(1)}</p>
    </div>
  );
};

export default Blank;