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
    Cookies.remove('authenticated');
    googleLogout();
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  useEffect(() => {
    if(!isAuthenticated){
      const passwordInput = document.getElementById('password');
      const togglePassword = document.getElementById('togglePassword');

      togglePassword.addEventListener('change', function () {
        if (this.checked) passwordInput.type = 'text';
        else passwordInput.type = 'password';
      });
    }
  }, [])
  
  return (
    <>
    {!isAuthenticated ? (
      <div className='account_box'>
        <div className='account_login'>
          <h1>Login</h1>
          <div className='account_user_pw'>
            <form className='account_user'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' placeholder='Enter your username'/>
            </form>
            <form className='account_pw'>
              <label for='password'>Password</label>
              <input type='password' id='password' name='password' placeholder='Enter your password' />
              <input type='checkbox' id='togglePassword' />
            </form>
            <button className='cart_order_button'>Login</button>
          </div>
          <div className='account_3rd_party'>
            <p>Or</p>
            <GoogleLogin
              onSuccess={handleSignIn}
              onError={() => console.log('Login Failed')}
            />
          </div>
        </div>
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