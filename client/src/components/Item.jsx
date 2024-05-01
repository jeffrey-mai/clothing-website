import React from 'react';

const Item = (props) => {
  const {image, name, price, rating_rate, rating_count} = props;

  return (
    <div className='shopping_item'>
      <img className='shopping_item_photo' height='300px' width='250px' src={image} />
      <div className='shopping_item_description'>
        <div className='shopping_item_name'>
          <p>{name}</p>
        </div>
        <div className='shopping_item_rating_price'>
          <p>Rating: {rating_rate}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  )
};

export default Item;