import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Shopping from '../components/Shopping.jsx';
import ToS from '../components/TermsOfService.jsx';

const WomenContainer = () => {
  
  return (
    <div className='womenContainer'>
      <NavBar />
      <Shopping />
      <ToS />
    </div>
  )
}

export default WomenContainer;