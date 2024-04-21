import React, { useEffect, useState } from 'react';
import menPhoto from '../assets/menPhoto.jpg';
import homepageGIF from '../assets/homepageGIF.mp4';

const Homepage = () => {
  
  return (
    <div className='homepage'>
      <video class="youtube-player" width="100%" autoplay='true' loop='true' muted='true'>
        <source src={homepageGIF} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className='menPhoto'>
        <div className='menPhoto_description'>
          <h1>Shop Men Clothes</h1>
        </div>
        <img width='800px' height='800px' src={menPhoto}/>
      </div>
      <div className='womenPhoto'>
        <img src='https://fashiondressesforless.com/cdn/shop/products/901509964533596160_800x.jpg?v=1650400112'/>
        <div className='womenPhoto_description'>
          <h1>Shop Women Clothes</h1>
        </div>
      </div>
    </div>
  )
}

export default Homepage;