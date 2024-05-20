import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, googleLogout } from '@react-oauth/google';

const AccountPage = (props) => {
  const { isAuthenticated, setIsAuthenticated } = props;
  const navigate = useNavigate();
  const handleSignIn = () => {
    setIsAuthenticated(true);
  }

  const handleSignOut = () => {
    setIsAuthenticated(false);
    googleLogout();
  };

  useEffect(() => {
    console.log(isAuthenticated, 'AFTER');
    // navigate('/');
  }, [isAuthenticated]);
  
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