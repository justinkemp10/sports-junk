import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Login from '../components/Login';
import Register from '../components/Register';

const LoginSignup = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm  = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <>
    <Navbar />
    {
      currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }
    <Footer />
    </>
  )
}

export default LoginSignup;