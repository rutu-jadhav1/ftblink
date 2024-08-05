import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './../Register/Register.css'
import loginUser from './user.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <form className='register-form text-style'>
                <div className='register-name-container'>
                    <h2>Login Here</h2>
                    <img src={loginUser} alt='register-img' className='register-img' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control register-input" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="button" className="register-btn">Login</button>
                <Link to='/register' className='register-pg-link'>Don't have account? <span className='pg-link-nm'>Register</span></Link>
        </form>
    </div>
  )
}

export default Login