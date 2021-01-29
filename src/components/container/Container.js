import React from 'react';
import './Container.css'

const Container = ({ children }) => {
  return (
    <div className='container outer-container'>
      <label className='name'>Name</label>
      <label className='email'>Email</label>
      <label className='number'>Phone Number</label>
      <div className='container inner-container'>{children}</div>
    </div>
  );
}

export default Container;