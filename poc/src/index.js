
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import Login from './login';
import Register from './register';
import PostJob from './post-job';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listings from './listings';


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="*" element={<div className='container mt-5'><h2>404 - Page Not Found</h2></div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


