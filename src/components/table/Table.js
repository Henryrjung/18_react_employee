import React from 'react';
import './styles.css'

const Table = (props) => {
  return (
    <div className={`card ${props.color}`}>
      <img className='image' src={props.image} alt={props.name} />
      <div className='name'>{props.name}</div>
      <div className='email'>{props.email}</div>
      <div className='phone'>{props.phone}</div>
    </div>
  );
}

export default Table;