import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './AuthProvider.js';
import MainContainer from './containers/MainContainer.js';
import MenContainer from './containers/MenContainer.js';
import WomenContainer from './containers/WomenContainer.js';
import ElectronicContainer from './containers/ElectronicContainer.js';
import JewleryContainer from './containers/JewleryContainer.js';
import CartContainer from './containers/CartContainer.js';
import AccountContainer from './containers/AccountContainer.js';

const App: React.FC = (): JSX.Element => {
  return (
    <GoogleOAuthProvider clientId={process.env.clientId!}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/men" element={<MenContainer />} />
            <Route path="/women" element={<WomenContainer />} />
            <Route path="/electronics" element={<ElectronicContainer />} />
            <Route path="/jewleries" element={<JewleryContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/account" element={<AccountContainer />} />
          </Routes>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;