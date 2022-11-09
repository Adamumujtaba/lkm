import React from 'react'
import { Link } from 'react-router-dom'

function CreateAccount() {
  return (
    <div className='userAcc'>
    <form>
        <input type={'text'} placeholder='First name'/>
        <input type={'text'} placeholder='Last name'/>
        <input type={'email'} placeholder='Email Address'/>
        <input type={'password'} placeholder='password'/>
        <input type={'password'} placeholder='confirmed password'/>
        <input type={'submit'} />
        <p><Link to={'/'}>Already have account Login</Link></p>

    </form>
    </div>
  )
}

export default CreateAccount