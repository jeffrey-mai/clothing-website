import React from 'react';
import searchIcon from '../assets/search-icon.png';
import cartIcon from '../assets/my-cart.png';
import accountIcon from '../assets/account-icon.png';
import logo from '../assets/logo.png';

const NavBar = () => {
  window.addEventListener('scroll', function() {
    const navBar = document.querySelector('#navBar');
    const searchIcon = document.querySelector('.searchIcon');
    const accountIcon = document.querySelector('.accountIcon');
    const cartIcon = document.querySelector('.cartIcon');

    if (window.scrollY > 0) {
      navBar.style.backgroundColor = 'white';
      navBar.style.color = 'black';
      navBar.style.borderBottom = '1px solid black';
      searchIcon.style.filter = 'invert(0%)';
      accountIcon.style.filter = 'invert(0%)';
      cartIcon.style.filter = 'invert(0%)';
    } else {
      navBar.style.backgroundColor = '';
      navBar.style.color = 'white';
      navBar.style.borderBottom = '';
      searchIcon.style.filter = 'invert(100%)';
      accountIcon.style.filter = 'invert(100%)';
      cartIcon.style.filter = 'invert(100%)';
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