import React from 'react'
import '../assest/styling/LoginPg.css'
import { Navigate ,Link} from "react-router-dom";

const LoginPg = () => {
   
  return (
    <>
    <div className="loginPage">
      <div className="loginForm">
        <h>Login Page</h>
          <form>
            <div className='inputfield'>
              <label><strong>Email:</strong></label>
              <input type='email' name='email' autoComplete='off' placeholder='Enter Email' />
            </div>
            <div className='inputfield'>
              <label><strong>Password:</strong></label>
              <input type='password' name='password' placeholder='Enter Password' />
            </div>
            <Link to="/employeeDashboard">
            <button >Log in </button>
            </Link>
            <div className='checkbox'>
              <input type="checkbox" name='tick'/>
              <label>You are Agree with terms & conditions</label>
              </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default LoginPg
