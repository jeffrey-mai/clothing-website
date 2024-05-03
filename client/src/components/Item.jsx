import React, { useEffect, useState } from 'react';

const Item = (props) => {
  const {image, name, price, rating_rate, rating_count, description, category} = props;
  const [isHovered, setIsHovered] = useState(false);
  const [itemDescription, setItemDescription] = useState(
    <div className='shopping_item_description'>
      <div className='shopping_item_name'>
        <p>{name}</p>
      </div>
      <div className='shopping_item_rating_price'>
        <p>Rating: {rating_rate}</p>
        <p>${price}</p>
      </div>
    </div>
  );

  useEffect(() => {
    if(isHovered){
      setItemDescription(
        <div className='shopping_item_description'>
          <div className='shopping_item_name'>
            <p>{name}</p>
          </div>
          <div className='shopping_item_summary'>
            <p>{description}</p>
          </div>
          <div className='shopping_item_rating_price'>
            <p>Rating: {rating_rate}</p>
            <p>${price}</p>
          </div>
        </div>
      );
    } 
    else {
      setItemDescription(
        <div className='shopping_item_description'>
          <div className='shopping_item_name'>
            <p>{name}</p>
          </div>
          <div className='shopping_item_rating_price'>
            <p>Rating: {rating_rate}</p>
            <p>${price}</p>
          </div>
        </div>
      );
    }
  }, [isHovered])

  return (
    <div 
      className={isHovered ? 'enlarged_shopping_item' : 'shopping_item'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        className='shopping_item_photo'
        height={isHovered ? '400px' : '300px'}
        width={isHovered ? '250px': '250px'}
        src={image}
      />
      {itemDescription}
    </div>
  )
};

export default Item;