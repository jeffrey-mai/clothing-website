import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import Shopping from '../components/Shopping.jsx';
import ToS from '../components/TermsOfService.jsx';

const MenContainer = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/men-clothes')
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
    <div className='menContainer'>
      <NavBar />
      <Shopping categoryItems={Items} />
      <ToS />
    </div>
  )
}

export default MenContainer;