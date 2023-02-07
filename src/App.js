import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Contact from './routes/Contact';
import Collection from './routes/Collection';
import Blog from './routes/Blog';
import LoginSignup from './routes/LoginSignup';
import Marketplace from './routes/Marketplace';

import './index.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/marketplace' element={<Marketplace />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/loginsignup' element={<LoginSignup />} />
    </Routes>
    </>
  );
}

export default App;
