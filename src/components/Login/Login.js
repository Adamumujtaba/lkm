import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
    const navigate = useNavigate();
    function Next(){
        navigate('/exam');
    }
  return (
    <div className='loginForm'>
        <form onSubmit={Next}>
            <input type={'text'} placeholder='username' />
            <input type={'password'} placeholder='Password' />
            <input type={'submit'} />
            <p><Link to={'/createAccount'}>Create new account</Link></p>
        </form>
    </div>
  )
}

export default Login