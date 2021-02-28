import React from 'react';
import '../../../App.css';
import '../../Button.css';
import './Sign.css'

export default function SignUp() {
  return(  
    <div  className='sign'>
  <h4 >From quality to loyalty!</h4>
  <h3>Register<br/>Please fill in this form to create an account</h3>
        <hr/>
        <form className='form' action="http://star-it-api.herokuapp.com/" method="GET">
          <label htmlFor="username">Your Name:</label><br/>
          <input type="text" placeholder="enter name" required/>
          <br/>
          <label htmlFor="email">Your Email:</label><br/>
          <input type="email" placeholder="enter email" required/>
          <br/>
          <label htmlFor="psw" >Your Password:</label><br/>
          <input type="password" placeholder="enter password" required/>
          <br/>
          <label htmlFor="psw-repeat"  >Repeat Password:</label><br/>
          <input type="password" placeholder="repeat password" required/>
          <br/>
          <hr/>
          <h6>By creating an account you agree to our <br/>
            <a href="https://rdadr.github.io/Star_IT" rel="noreferrer" target="_blank">Terms & Privacy</a></h6>
          <button className='warning-btn' type="submit" target="_blank">Sign Up</button>
          </form>
        </div>
  );
}
