
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="login-container">
      <div className="card login-card input-field">
        <h2>Insta-Seeds</h2>
        <input 
        type="text"
        placeholder="Full Name"
        />
        <input 
        type="text"
        placeholder="Email"
        />
    <input 
    type="password"
        placeholder="Password"
        />
        <button class="btn waves-effect waves-light btn-large #64b5f6 blue darken-1  ">Signup</button>

          <h6> 
          < Link to="/login" > Don't  Alredy have an account? </Link>

            </h6>
          </div>
    </div>
  )  
}

export default Signup