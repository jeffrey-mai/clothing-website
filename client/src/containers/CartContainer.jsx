import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import ToS from '../components/TermsOfService.jsx';
import CartItem from '../components/CartItem.jsx';

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/cart')
      .then(response => response.json())
      .then(data => {
        const cache = [];
        console.log(data.rows);
        for(const item of data.rows){
          setTotalPrice(prevTotalPrice => prevTotalPrice + (item.price * item.quantity));
          cache.push(
            <CartItem
              key={item.id}
              image={item.image}
              name={item.title}
              price={item.price}
              color={item.color}
              size={item.size}
              quantity={item.quantity}
            />
          );
        }
        setCartItems(cache);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className='cart'>
      <NavBar />
      <div className='cart_description'>
        <div className='cart_list'>
          <h2>Shopping Cart</h2>
          {cartItems}
          <div className='cart_list_subtotal'>
            <p>Subtotal (1 item):&nbsp;</p>
            <p className='cart_list_subtotal_number'>${Number(totalPrice).toFixed(2)}</p>
          </div>
        </div>
        <div className='cart_order_summary'>
          <h2>Order Summary</h2>
          <div className='cart_items_price'>
            <p>Items:</p>
            <p>${Number(totalPrice).toFixed(2)}</p>
          </div>
          <div className='cart_shipping_price'>
            <p>Shipping & handling:</p>
            <p>Free</p>
          </div>
          <div className='cart_before_tax_price'>
            <p>Total before tax:</p>
            <p>${Number(totalPrice).toFixed(2)}</p>
          </div>
          <div className='cart_tax_price'>
            <p>Estimated tax to be collected:</p>
            <p>${Number(totalPrice * 0.15).toFixed(2)}</p>
          </div>
          <div className='cart_total_price'>
            <h2>Order total:</h2>
            <h2>${Number(totalPrice * 0.15 + totalPrice).toFixed(2)}</h2>
          </div>
          <button className='cart_order_button'>Place your order</button>
        </div>
      </div>
      <ToS />
    </div>
  );
};

export default CartContainer;