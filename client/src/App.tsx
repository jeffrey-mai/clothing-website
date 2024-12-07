import React, { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './AuthProvider';
import MainContainer from './containers/MainContainer';
import MenContainer from './containers/MenContainer';
import WomenContainer from './containers/WomenContainer';
import ElectronicContainer from './containers/ElectronicContainer';
import JewleryContainer from './containers/JewleryContainer';
import CartContainer from './containers/CartContainer';
import AccountContainer from './containers/AccountContainer';

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