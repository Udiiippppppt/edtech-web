import React from 'react'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Internship from '../components/Internship/Internship'
import AboutUs from '../components/Aboutus/AboutUs'
import Mainsection from '../Main-section/Mainsection'

function Home() {
  return (
    <div>
      <Header/>
      <Mainsection/>
      <Services/>
      <Internship/>
      <AboutUs/>
    </div>
  )
}

export default Home
