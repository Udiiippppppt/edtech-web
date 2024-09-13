import React, { useState } from 'react';
import './internship.css';
import EnrollForm from '../Enrollform/EnrollForm';

const internships = [
  {
    title: 'Frontend Development Internship',
    duration: '3 Months',
    description: 'Learn to build responsive and interactive web applications using HTML, CSS, and JavaScript.',
    location: 'Remote',
    Price: '30$',
  },
  {
    title: 'Backend Development Internship',
    duration: '4 Months',
    description: 'Work with server-side technologies like Node.js, Express, and databases to build scalable applications.',
    location: 'New York, USA',
    Price: '30$',
  },
  {
    title: 'Full Stack Development Internship',
    duration: '6 Months',
    description: 'Master both frontend and backend development, and become a versatile web developer.',
    location: 'London, UK',
    Price: '30$',
  },
  {
    title: 'Data Science Internship',
    duration: '5 Months',
    description: 'Dive into data analysis, machine learning, and data visualization using Python and R.',
    location: 'Remote',
    Price: '30$',
  },
  {
    title: 'UX/UI Design Internship',
    duration: '3 Months',
    description: 'Learn the principles of design thinking and create user-friendly interfaces for web and mobile apps.',
    location: 'San Francisco, USA',
    Price: '30$',
  },
  {
    title: 'Cybersecurity Internship',
    duration: '4 Months',
    description: 'Gain hands-on experience in securing networks, systems, and data from cyber threats.',
    location: 'Remote',
    Price: '30$',
  },
];

const Internship = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnrollClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
  };

  const handleGoBack = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="internship-courses-container">
      {selectedCourse ? (
        <EnrollForm selectedCourse={selectedCourse} goBack={handleGoBack} />
      ) : (
        <>
          <h1 className="internship-title">Our Internship Programs</h1>
          <div className="internship-list">
            {internships.map((internship, index) => (
              <div key={index} className="internship-item">
                <h2 className="internship-name">{internship.title}</h2>
                <p className="internship-duration">
                  <strong>Duration:</strong> {internship.duration}
                </p>
                <p className="internship-description">{internship.description}</p>
                <p className="internship-location">
                  <strong>Location:</strong> {internship.location}
                </p>
                <p className="internship-price">
                  <strong>Price:</strong> {internship.Price}
                </p>
                <button
                  className="purchase-button"
                  onClick={() => handleEnrollClick(internship.title)}
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Internship;
