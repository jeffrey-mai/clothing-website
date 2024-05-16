import React from 'react';

const CartItem = props => {
  const {image, name, price, color, size, quantity} = props;

  return (
    <div className='cartItem'>
      <div className='cartItem_description'>
        <img height='250px' width='200px' src={image}/>
        <div className='cartItem_summary'>
          <h3>{name}</h3>
          <p>Color:&nbsp;{color}</p>
          <p>Size:&nbsp;{size}</p>
          <p>Quantity:&nbsp;{quantity}</p>
        </div>
      </div>
      <div className='cartItem_price'>
        ${Number(price).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;