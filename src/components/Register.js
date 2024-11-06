import React from 'react'
import '../assest/styling/Register.css'


const Register = () => {
  return (
    <>
      <div className="RegPage">
        <div className="RegForm">
          <h>Registration Page</h>
          <form>
            <div className='inputfield'>
              <label><strong>Full Name:</strong></label>
              <input type='fname' name='fname' placeholder='Enter full name' />
            </div>
            <div className='inputfield'>
              <label><strong>Phone Number:</strong></label>
              <input type='phone' name='phone' placeholder='Enter phone number' />
            </div>
            <div className='inputfield'>
              <label><strong>Email:</strong></label>
              <input type='email' name='email' autoComplete='off' placeholder='Enter your Email' />
            </div>
            <div className='inputfield'>
              <label><strong>Password:</strong></label>
              <input type='password' name='password' placeholder='Enter your Password' />
            </div>
            <div className='inputfield'>
              <label><strong>Confirm Password:</strong></label>
              <input type='cpassword' name='cpassword' placeholder='Confirm your Password' />
            </div>
            <button>Register</button>
            <div className='checkbox'>
              <label>By clicking Sign Up, you are agree to our terms & conditions</label>
            </div>
         </form>
        </div>
      </div>
    </>
  )
}

export default Register

