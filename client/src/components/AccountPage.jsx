import React, { useEffect, useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import Cookies from 'js-cookie';

const AccountPage = (props) => {
  const { isAuthenticated, setIsAuthenticated } = props;
  const handleSignIn = () => {
    setIsAuthenticated(true);
  }
  
  const handleSignOut = () => {
    setIsAuthenticated(false);
    googleLogout();
  };

  useEffect(() => {
    if(isAuthenticated) {
      Cookies.set('authenticated', true, { expires: 1 });
      window.location.href = '/';
    }
    else Cookies.remove('authenticated');
  }, [isAuthenticated])
  
  return (
    <div className='account_summary'>
      {!isAuthenticated ? (
        <GoogleLogin
          onSuccess={handleSignIn}
          onError={() => console.log('Login Failed')}
        />
      ) : (
        <button onClick={handleSignOut}>Sign Out</button>
      )}
    </div>
  )
}

export default AccountPage;