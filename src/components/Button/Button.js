import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button =()=> {
  return (
    <Link to='sign-in'>
      <button className='btn'>Sign In</button>
    </Link>
  );
}
export default Button