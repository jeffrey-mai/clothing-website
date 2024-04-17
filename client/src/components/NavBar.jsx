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
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg> */}
          <a>Sign In</a>
        </div>
        <div className='myCart'>
          <img src={cartIcon}/>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg> */}
          <a>My Cart</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;