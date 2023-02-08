import './LoginRegister.css';
import React, { useState } from 'react';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        // stops page reload to keep our state
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label for='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email Address' id='email' name='email'></input>
                <label for='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'></input>
                <button>Log In</button>
            </form>
            <button className='login-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Click here to register.</button>
        </div>
    )
}

export default Login;