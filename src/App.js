import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mainsection from './Main-section/Mainsection';
import ModeSwitcher from './mode/ModeSwitcher';
import Footer from './components/footer/Footer';
import Services from './components/Services/Services';
import AboutUs from './components/Aboutus/AboutUs';
import Internship from './components/Internship/Internship';
import EnrollForm from '../src/components/Enrollform/EnrollForm'; 

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const handleGoBack = () => {
    setSelectedCourse(null);
  };

  return (
    <Router>
      <div className="App">
        {selectedCourse ? (
          <EnrollForm selectedCourse={selectedCourse} goBack={handleGoBack} />
        ) : (
          <>
            <ModeSwitcher/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Mainsection />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/internship" element={<Internship onCourseSelect={handleCourseSelect} />} />
            </Routes>
            <Footer onCourseSelect={handleCourseSelect} />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
