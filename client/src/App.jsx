import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import MenContainer from './containers/MenContainer.jsx';
import WomenContainer from './containers/WomenContainer.jsx';
import ElectronicContainer from './containers/ElectronicContainer.jsx';
import JewleryContainer from './containers/JewleryContainer.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/men" element={<MenContainer />} />
        <Route path="/women" element={<WomenContainer />} />
        <Route path="/electronics" element={<ElectronicContainer />} />
        <Route path="/jewleries" element={<JewleryContainer />} />
      </Routes>
    </Router>
  );
};

export default App;