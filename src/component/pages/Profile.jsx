import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation()
  // console.log(location);
  return (
    <div>
      <h2 className='tittle'>Profile</h2>
      <p style={{fontSize:"14px"}}><span className='text-muted'>Home / Users </span> {location.pathname}</p>
    </div>
  );
};

export default Profile;