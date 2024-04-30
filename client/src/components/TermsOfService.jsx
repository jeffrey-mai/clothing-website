import React, { useEffect, useState } from 'react';
import facebookLogo from '../assets/facebook-logo.png';
import instagramLogo from '../assets/instagram-logo.png';
import tiktokLogo from '../assets/tiktok-logo.png';
import youtubeLogo from '../assets/youtube-logo.png';
import logo from '../assets/logo.png'

const TermsOfService = () => {
  
  return (
    <div className='termsOfService'>
      <div className='tos_shop'>
        <h2 className='tos_shop_title'>SHOP</h2>
        <div className='tos_shop_category'>
          <a href='http://localhost:8081/men' className='tos_shop_men'>Men</a>
          <a href='http://localhost:8081/women' className='tos_shop_women'>Women</a>
          <a href='http://localhost:8081/electronics' className='tos_shop_electronics'>Electronics</a>
          <a href='http://localhost:8081/jewleries' className='tos_shop_jewleries'>Jewleries</a>
        </div>
      </div>
      <div className='tos_socialMedia'>
        <img className='tos_instagram' height='30px' width='30px' src={instagramLogo} />
        <img className='tos_tiktok' height='30px' width='30px' src={tiktokLogo} />
        <img className='tos_youtube' height='30px' width='30px' src={youtubeLogo} />
        <img className='tos_facebook' height='30px' width='30px' src={facebookLogo} />
      </div>
      <div className='tos_description'>
        <p>
          The content of this site is copyright-protected and is the 
          property of Clothing Brand. Clothing Brand is committed to 
          accessibility. That commitment means Clothing Brand embraces WCAG 
          guidelines and supports assistive technologies such as screen 
          readers. If you are using a screen reader, magnifier, or other 
          assistive technologies and are experiencing difficulties using 
          this website, please call our TOLL-FREE support line 
          (123-456-7890) for assistance.
        </p>
      </div>
      <img className='tos_logo' height='60px' width='60px' src={logo} />
    </div>
  )
}

export default TermsOfService;