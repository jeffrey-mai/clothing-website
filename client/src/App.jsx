import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MainContainer from './containers/MainContainer.jsx';
import MenContainer from './containers/MenContainer.jsx';
import WomenContainer from './containers/WomenContainer.jsx';
import ElectronicContainer from './containers/ElectronicContainer.jsx';
import JewleryContainer from './containers/JewleryContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';
import AccountContainer from './containers/AccountContainer.jsx';
import Cookies from 'js-cookie';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = Cookies.get('authenticated');
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  return (
    <GoogleOAuthProvider clientId="621243445009-orpi0rl9lvr7po9qqcgrccje2faeqplu.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/men" element={<MenContainer />} />
          <Route path="/women" element={<WomenContainer />} />
          <Route path="/electronics" element={<ElectronicContainer />} />
          <Route path="/jewleries" element={<JewleryContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/account" element={<AccountContainer isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;