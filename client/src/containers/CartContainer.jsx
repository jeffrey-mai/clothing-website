import React, { useState } from 'react';
import NavBar from '../components/NavBar.jsx';
import ToS from '../components/TermsOfService.jsx';
import CartItem from '../components/CartItem.jsx';

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);

  //fetch for cart info

  return (
    <div className='cart'>
      <NavBar />
      <div className='cart_description'>
        <div className='cart_list'>
          <h1>Shopping Cart</h1>
          <CartItem
            key={1}
            image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
            name={"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}
            price={109.95}
            color={'limegreen'}
            size={'Medium'}
            quantity={1}
          />
        </div>
        <div className='cart_order_summary'>
          <h2>Order Summary</h2>
          <div className='cart_items_price'>
            <p>Items:</p>
            <p>123</p>
          </div>
          <div className='cart_shipping_price'>
            <p>Shipping & handling:</p>
            <p>123</p>
          </div>
          <div className='cart_before_tax_price'>
            <p>Total before tax:</p>
            <p>123</p>
          </div>
          <div className='cart_tax_price'>
            <p>Estimated tax to be collected:</p>
            <p>123</p>
          </div>
          <div className='cart_total_price'>
            <h2>Order total:</h2>
            <h2>123</h2>
          </div>
        </div>
      </div>
      <ToS />
    </div>
  );
};

export default CartContainer;