import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Register.css'
import registerlogo from './register.png'

function Register() {
    return (
        <div>
            <form className='register-form text-style'>
                <div className='register-name-container'>
                    <h2>Register Here</h2>
                    <img src={registerlogo} alt='register-img' className='register-img' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Fullname" />
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
                <div className="form-group">
                    <label for="exampleInputEmail1">Profession</label>
                    <select class="form-control register-input" id="exampleFormControlSelect1">
                        <option>select Profession</option>
                        <option>Business</option>
                        <option>Student</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">DOB </label>
                    <input type="date" className="form-control register-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Fullname" />
                </div>

                <button type="button" className="register-btn">Register</button>
            </form>
        </div>
    )
}

export default Register