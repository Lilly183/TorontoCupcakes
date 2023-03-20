import React, { useContext } from 'react';
import '../css/ShoppingCart.css'

import CartContext from '../context/cart/CartContext';
import CurrencyFormat from 'react-currency-format';
import ShoppingCartItem from './ShoppingCartItem';

{/* <ShoppingCartItem 
imgSrc = "shop/cart/cart-1.jpg"
name = "T-shirt Contrast Pocket"
price = {30.00}
/>
<ShoppingCartItem
imgSrc = "shop/cart/cart-2.jpg"
name = "Diagonal Textured Cap"
price = {32.50}
/>
<ShoppingCartItem
imgSrc = "shop/cart/cart-3.jpg"
name = "Basic Flowing Scarf"
price = {47.00}
/>
<ShoppingCartItem
imgSrc = "shop/cart/cart-4.jpg"
name = "Basic Flowing Scarf"
price = {30.00}
/> */}

const ShoppingCart = () => 
{
    const { showCart, cartItems, showHideCart } = useContext(CartContext);

    return (
        <>
            {showCart && (
                <div className="shopping-cart-wrapper container p-0 bg-primary">

                    <div className="shopping-cart-origin bg-warning float-end">

                        <aside className="shopping-cart container my-2 py-2">
                            <div className="row">
                                <div className="col">
                                    {cartItems.length === 0 ? 
                                    (<>
                                        <div className="container m-0 p-0">
                                            <div className="row m-0 p-0">
                                                <div className="col m-0 p-0 text-center"> 
                                                    Your shopping cart is empty! 
                                                </div>
                                                <div className="col-1 m-0 p-0 text-center shopping__cart__empty__close">
                                                    <i className="fa fa-times-circle" aria-hidden="true" onClick={showHideCart}/>
                                                </div>
                                            </div>
                                        </div>
                                    </>) :
                                    (<>
                                        <div className="shopping__cart__table">
                                            <table className="table table-sm w-100 mb-2">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th colSpan={3} className="text-center">Quantity</th>
                                                        <th className="text-center">Total</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody> 
                                                    {cartItems.map(item => (
                                                    <ShoppingCartItem
                                                    key = {item._id}
                                                    item = {item}
                                                    />
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="container mx-0">
                                            <div className="row cart__total px-2 py-3">
                                                <div className="col">
                                                    <h6 className="m-0">Cart Total:</h6>
                                                </div>
                                                <div className="col text-end">
                                                    <h5>
                                                        <CurrencyFormat value={169.50} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row text-center">
                                                <a href="/" className="cart__total__checkout p-2">Proceed to checkout</a>
                                            </div>
                                        </div>
                                    </>)}                             
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            )}
        </>
    )
}

export default ShoppingCart;