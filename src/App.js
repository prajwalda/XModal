import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data validation
    if (!formData.username || !formData.email || !formData.dob || !formData.phone) {
      alert('Please fill out all fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    if (formData.phone.length !== 10 || isNaN(formData.phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const dob = new Date(formData.dob);
    const today = new Date();
    if (dob >= today) {
      alert('Invalid date of birth. Please enter a past date.');
      return;
    }

    // If all validations pass, reset form and close modal
    setFormData({
      username: '',
      email: '',
      dob: '',
      phone: ''
    });
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange} />

              <label htmlFor="email">Email</label>
              <input type="text" id="email" value={formData.email} onChange={handleChange} />

              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" value={formData.dob} onChange={handleChange} />

              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
