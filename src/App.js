import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/authentication/register';
import Navbar from './components/Navbar';
import Login from './components/authentication/login';
import HospitalSearch from './components/HospitalSearch';
import BookingForm from './components/BookingForm';
import Home from './home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use Home component for root path */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hospital-search" element={<HospitalSearch />} />
        <Route path="/book-appointment/:hospitalId" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
