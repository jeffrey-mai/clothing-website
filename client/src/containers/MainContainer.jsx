import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx'
import Homepage from '../components/Homepage.jsx';

const MainContainer = () => {
  
  return (
    <div className='mainContainer'>
      <NavBar />
      <Homepage />
    </div>
  )
}

export default MainContainer;