import React from 'react';
import './Container.css'

const Container = ({ children }) => {
  return (
    <div className='container'>
      <label className='employeeName'>Name</label>
      <label className='employeeEmail'>Email</label>
      <label className='employeeNumber'>Phone Number</label>
      <div className='childContainer'>{children}</div>
    </div>
  );
}

export default Container;