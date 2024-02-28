import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Componants/Login';
import Signup from './Componants/Singup';
import NoPage from './Componants/NoPage';
import User from "./Componants/User"
import Portfolio from "./Componants/Portfolio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Portfolio />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NoPage />} /> {/* This will catch any other route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
