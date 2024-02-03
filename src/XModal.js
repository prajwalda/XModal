import React, { useState } from "react";
import "./XModal.css";

const XModal = ({ setIsOpenModal, setModalOpenBackground }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleFormDataChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validationChecks = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      window.alert("Invalid email. Please check your email address.");
      return;
    }

    if (formData.phone.length < 10) {
      window.alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (inputDate > currentDate) {
      window.alert(
        "Invalid date of birth. Date of birth cannot be in the future."
      );
      return;
    }
  };

  return (
    <div
      className="modalBackground"
      onClick={() => {
        //close modal on clicking modal background
        setIsOpenModal(false);
        setModalOpenBackground(false);
        setFormData((prevData) => ({
          ...prevData,
          username: "",
          email: "",
          phone: "",
          dob: "",
        }));
      }}
    >
      <div
        className="modal"
        onClick={(e) => {
          //do not close modal when clicked inside modal container,
          // which is part of modal background.
          e.stopPropagation();
        }}
      >
        <div className="modalHeader">
          <h1>Fill Details</h1>
        </div>
        <div className="modal-content">
          <form onSubmit={validationChecks}>
            <label htmlFor="username">
              <h3>Username:</h3>
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleFormDataChange}
              required
            />

            <label htmlFor="email">
              <h3>Email Address:</h3>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleFormDataChange}
              required
            />

            <label htmlFor="phone">
              <h3>Phone Number:</h3>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleFormDataChange}
              required
            />

            <label htmlFor="dob">
              <h3>Date of Birth:</h3>
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleFormDataChange}
              required
            />
            <div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default XModal;
