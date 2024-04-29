import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Shopping from '../components/Shopping.jsx';
import ToS from '../components/TermsOfService.jsx';

const JewleryContainer = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jeweleries')
      .then(response => response.json())
      .then(data => {
        const categoryItems = [];
        for(const key in data.rows){
          categoryItems.push(data.rows[key].image);
        }
        setItems(categoryItems);
      })
      .catch(err => console.log(err));
    }, []);

  return (
    <div className='jewleryContainer'>
      <NavBar />
      <Shopping categoryItems={Items} />
      <ToS />
    </div>
  )
}

export default JewleryContainer;