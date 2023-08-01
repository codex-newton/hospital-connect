import React, { useState } from 'react';

const BookingForm = ({ match }) => {
  // Extracting the hospitalId from the URL parameter
  const hospitalId = match.params.hospitalId;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, send the data to a backend or perform any other necessary actions.
    // You can use the hospitalId, fullName, email, phoneNumber, and date to process the booking information.
    console.log('Booking submitted:');
    console.log('Hospital ID:', hospitalId);
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Date:', date);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingForm;
