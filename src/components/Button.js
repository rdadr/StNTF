import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-in'>
      <button className='btn'>Sign In</button>
    </Link>
  );

  return(
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}
