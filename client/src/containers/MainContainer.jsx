import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx'
import Homepage from '../components/Homepage.jsx';
import ToS from '../components/TermsOfService.jsx'

const MainContainer = () => {
  
  return (
    <div className='mainContainer'>
      <NavBar />
      <Homepage />
      <ToS />
    </div>
  )
}

export default MainContainer;