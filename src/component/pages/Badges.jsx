import React from 'react';
import { useLocation } from 'react-router-dom';

const Badges = () => {
  const location = useLocation()

  return (
    <div>
      <h2 className='tittle'>Badges</h2>
      <p style={{fontSize:"14px"}}><span className='text-muted'>Home / Components</span> {location.pathname}</p>
    </div>
  );
};

export default Badges;