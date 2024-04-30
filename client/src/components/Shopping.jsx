import React, { useEffect, useState } from 'react';
import Item from './Item.jsx';
import womenHomePic from '../assets/womenHomePic.jpg';
import menHomePic from '../assets/menHomePic.jpg';

const Shopping = (props) => {
  const {categoryItems} = props, currentUrl = window.location.href;
  let categoryPhoto, categoryProducts;

  if (currentUrl === 'http://localhost:8081/men'){
    categoryPhoto = 'https://i0.wp.com/manforhimself.com/wp-content/uploads/2017/07/mens-clothing-sale-deals-online.jpg?fit=2000%2C1125&ssl=1';
    categoryProducts = (
      <div className='shopping_products'>
        <h3>Shop by Product</h3>
        <a>Polos</a>
        <a>T-shirts & Tops</a>
        <a>Shirts</a>
        <a>Shorts</a>
        <a>Swimwear</a>
        <a>Jeans</a>
        <a>Trousers</a>
        <a>Hoodies & Sweatshirts</a>
        <a>Blazer & Suits</a>
        <a>Jackets & Coats</a>
        <a>Cardigans & Sweaters</a>
        <a>Underwear</a>
        <a>Sleepwear</a>
        <a>Socks</a>
      </div>
    );
  }
  else if (currentUrl === 'http://localhost:8081/women'){
    // categoryPhoto = 'https://blog.garmentprinting.com.au/wp-content/uploads/2021/11/Workwear-Summer-Special-Colours-2021.jpg';
    categoryPhoto = 'https://www.thetimes.co.uk/imageserver/image//methode/times/prod/web/bin/2f2adf9a-ce63-11e9-bfe0-b5ac4ce6ca95.jpg';
    categoryProducts = (
      <div className='shopping_products'>
        <h3>Shop by Product</h3>
        <a>Dresses</a>
        <a>Tops</a>
        <a>Shirts & Blouses</a>
        <a>Pants</a>
        <a>Blazer & Vests</a>
        <a>Jeans</a>
        <a>Swimwear & Beachwear</a>
        <a>Shorts</a>
        <a>Skirts</a>
        <a>Shoes</a>
        <a>Jackets & Coats</a>
        <a>Cardigans & Sweaters</a>
        <a>Hoodies & Sweatshirts</a>
        <a>Underwear</a>
        <a>Sleepwear</a>
        <a>Socks</a>
      </div>
    );
  }
  else if (currentUrl === 'http://localhost:8081/electronics'){
    categoryPhoto = '';
    categoryProducts = (
      <div className='shopping_products'>
        <a>Phones</a>
        <a>Tablets</a>
      </div>
    );
  }
  else{
    categoryPhoto = '';
    categoryProducts = (
      <div className='shopping_products'>
        <a>Rings</a>
        <a>Earrings</a>
      </div>
    );
  }

  // window.addEventListener('scroll', function() {
  //   var scrollPos = window.scrollY;
  //   var image = document.querySelector('.shopping_img');
    
  //   // Calculate the amount to scale down the image based on scroll position
  //   var scale = Math.max(1 - (scrollPos / window.innerHeight), 0.5);
    
  //   // Apply the scale transformation to the image
  //   image.style.transform = 'scale(' + scale + ')';
  // });
  
  return (
    <div className='shopping'>
      <img className='shopping_img' src={categoryPhoto}/>
      <div className='shopping_container'>
        {categoryProducts}
        <div className='shopping_items'>
          {categoryItems.map((ele, i) => (<img key={i} src={ele} width='250px' height='300px'/>))}
          <Item />
        </div>
      </div>
    </div>
  )
}

export default Shopping;