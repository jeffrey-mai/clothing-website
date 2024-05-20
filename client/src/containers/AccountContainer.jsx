import React from 'react';
import AccountPage from '../components/AccountPage.jsx';

const AccountContainer = (props) => {
  const { isAuthenticated, setIsAuthenticated } = props;

  return (
    <div className='accountContainer'>
      <AccountPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </div>
  )
}

export default AccountContainer;