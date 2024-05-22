import React, { useEffect } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { useAuth } from '../AuthProvider.jsx';
import NavBar from './NavBar.jsx';
import ToS from './TermsOfService.jsx';

const AccountPage = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const handleSignIn = () => {
    setIsAuthenticated(true);
    Cookies.set('authenticated', true, { expires: 1 });
    window.location.href = '/';
  }
  
  const handleSignOut = () => {
    setIsAuthenticated(false);
    Cookies.remove('authenticated');
    googleLogout();
    window.location.href = '/';
  };
  
  return (
    <>
    {!isAuthenticated ? (
      <div className='account_login'>
          <GoogleLogin
            onSuccess={handleSignIn}
            onError={() => console.log('Login Failed')}
          />
      </div>
    ) : (
      <div className='account_summary'>
          <NavBar />
          <button onClick={handleSignOut}>Sign Out</button>
          <ToS />
      </div>
    )}
    </>
  )
}

export default AccountPage;