import React, { useEffect, useState } from 'react';
import menPhoto from '../assets/menPhoto.jpg'

const Homepage = () => {
  
  return (
    <div className='homepage'>
      <iframe class="youtube-player" 
        type="text/html" 
        width="100%" 
        height="850px" 
        src="https://www.youtube.com/embed/1ap0baidLVo?autoplay=1&mute=1&controls=0&loop=1" 
        frameborder="0" 
        allowfullscreen>
      </iframe>
      {/* <img width='800px' src='https://i.pinimg.com/736x/a7/c3/1d/a7c31df4f8483c0dae0da126089a3689.jpg'/> */}
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