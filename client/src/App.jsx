import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import MainContainer from './containers/MainContainer.jsx';
import MenContainer from './containers/MenContainer.jsx';
import WomenContainer from './containers/WomenContainer.jsx';
import ElectronicContainer from './containers/ElectronicContainer.jsx';
import JewleryContainer from './containers/JewleryContainer.jsx';
import CartContainer from './containers/CartContainer.jsx';
import AccountContainer from './containers/AccountContainer.jsx';
import { AuthProvider } from './AuthProvider.jsx';

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.clientId}>
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