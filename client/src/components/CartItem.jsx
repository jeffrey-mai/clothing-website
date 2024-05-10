import React from 'react';

const CartItem = props => {
  const {image, name, price, color, size, quantity} = props;

  return (
    <div className='cartItem'>
      <div className='cartItem_description'>
        <img height='350px' width='250px' src={image}/>
        <div className='cartItem_summary'>
          <h3>{name}</h3>
          <p>Color:&nbsp;{color}</p>
          <p>Size:&nbsp;{size}</p>
          <p>Quantity:&nbsp;{quantity}</p>
        </div>
      </div>
      <div className='cartItem_price'>
        {price}
      </div>
    </div>
  );
};

export default CartItem;