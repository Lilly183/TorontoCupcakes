import React, { useContext } from 'react';
import CartContext from '../context/cart/CartContext';
import CurrencyFormat from 'react-currency-format';
import CartItem from './CartItem';
import '../demo/DemoCart.css';

const Cart = () => 
{
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  
  const callMe = () =>
  {
    alert(cartItems.reduce((amount, item) => item.price + amount, ""));
  }

  return (
    <>
      {showCart && (
      <div className="cart_wrapper">
          <div style={{textAlign: "right"}}>
              <i
                className="fa fa-times-circle"
                aria-hidden="true"
                onClick={showHideCart}
              />
          </div>
          <div className="cart_innerWrapper">
            {cartItems.length === 0 ? 
              (<h4>Cart is empty!</h4>) : 
              (
                <ul>
                  {cartItems.map(item => (
                    <CartItem
                    key = {item._id}
                    item = {item}
                    />
                  ))}
                </ul>
              )}
          </div>
          <div className="Cart_cartTotal">
            <div>
              Cart Total
            </div>
            <div></div>
            <div style={{marginLeft: 5}}>
              <CurrencyFormat value={(cartItems.reduce((amount, item) => item.price + amount, ""))} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
            </div>
          </div>
      </div>
      )}
    </>
  )
}

export default Cart;