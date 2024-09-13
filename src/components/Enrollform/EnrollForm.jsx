import React, { useState } from 'react';
import './EnrollForm.css';

const EnrollForm = ({ selectedCourse, goBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    education: '',
    course: selectedCourse,
    mobile: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment and form submission here
    alert('Form submitted successfully!');
  };

  return (
    <div className="enroll-form-container">
      <h2>Enroll in {selectedCourse}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <div className="gender-selection">
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
          </div>
        </label>
        <label>
          Highest Education:
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Course of Interest:
          <input
            type="text"
            name="course"
            value={formData.course}
            readOnly
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-buttons">
          <button type="button" className="back-button" onClick={goBack}>
            Back
          </button>
          <button type="submit" className="payment-button">
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollForm;
