import './LoginRegister.css';
import React, { useState } from 'react';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        // stops page reload to keep our state
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='auth-form-container'>
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor='name'>Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='name' placeholder='Full Name' id='name' name='name'></input>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email Address' id='email' name='email'></input>
                <label htmlFor='password'>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'></input>
                <button>Log In</button>
            </form>
            <button className='login-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Click here to Login.</button>
        </div>
    )
}

export default Register;