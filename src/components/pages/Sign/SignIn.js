import React from 'react';
import { Link } from 'react-router-dom';
import '../../../App.css';
import '../../Button/Button.css';
import './Sign.css'

export default function SignIn() {
  return(  
    <div  className='sign'>
  <h4 >From quality to loyalty!</h4>
        <hr/>
        <form className='form' action="http://star-it-api.herokuapp.com/" method="GET">
          <label htmlFor="email">Your Email:</label><br/>
          <input type="email" placeholder="enter email" required/>
          <br/>
          <label htmlFor="password" >Your Password:</label><br/>
          <input type="password" placeholder="enter password" required/>
          <br/>
          <button className='warning-btn' type="submit" target="_blank">Sign In</button>
          <p>Register<br/>
            <Link to='/sign-up'><button className='warning-btn' type="submit">Sign Up</button></Link> </p>
          </form>
        </div>
  );
}
