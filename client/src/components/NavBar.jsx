import React from 'react';
import searchIcon from '../assets/search-icon.png';
import cartIcon from '../assets/my-cart.png';
import accountIcon from '../assets/account-icon.png';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='navName'>
        <img src={logo}/>
        Clothing Store
      </div>
      <form action="/search" method="get">
        <div>
          <input className="searchBar" type="text" name="q" placeholder="Search for your clothes"/>
        </div>
      </form>
      <div className='navTab'>
        <div className='account'>
          <img src={accountIcon}/>
          <a>Sign In</a>
        </div>
        <div className='myCart'>
          <img src={cartIcon}/>
          <a>My Cart</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;