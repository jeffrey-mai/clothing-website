import React from 'react';

const CartItem = props => {
  const { id, image, name, price, color, size, quantity, setCartItems, setTotalPrice } = props;

  const handleCartDelete = (id) => {
    fetch(`http://localhost:3000/cart?id=${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => {
      if(!response.ok) throw new Error('Network response was not ok');
      else{
        setTotalPrice(prevTotalPrice => prevTotalPrice - (price * quantity));
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      }
    })
    .catch(error => { console.error('There was a problem with the DELETE request:', error); });
  }

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
        <p>${Number(price).toFixed(2)}</p>
        <p className='cartItem_delete' onClick={() => handleCartDelete(id)}>Delete</p>
      </div>
    </div>
  );
};

export default CartItem;