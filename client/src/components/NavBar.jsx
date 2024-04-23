import React from 'react';
import searchIcon from '../assets/search-icon.png';
import cartIcon from '../assets/my-cart.png';
import accountIcon from '../assets/account-icon.png';
import logo from '../assets/logo.png';

const NavBar = () => {
  window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navBar');
    if (window.scrollY > 0) {
      navBar.style.backgroundColor = 'blue';
    } else {
      navBar.style.backgroundColor = '';
    }
  });

  return (
    <div className='navBar' id='navBar'>
      <div className='navBar_categories'>
        <a>Men</a>
        <a>Women</a>
        <a>Electronics</a>
        <a>Jewleries</a>
        <img className='searchIcon' src={searchIcon}/>
        <a>Search</a>
      </div>
      <div className='navName'>
        <img src={logo}/>
        Clothing Store
      </div>
      <div className='navTab'>
        <div className='account'>
          <img className='accountIcon' src={accountIcon}/>
          <a>Sign In</a>
        </div>
        <div className='myCart'>
          <img className='cartIcon' src={cartIcon}/>
          <a>My Cart</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;