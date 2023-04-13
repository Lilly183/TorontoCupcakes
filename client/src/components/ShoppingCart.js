import React, { useEffect, useState } from 'react';
import '../css/ShoppingCart.css'

import CurrencyFormat from 'react-currency-format';
import ShoppingCartItem from './ShoppingCartItem';

import { CartState } from '../context/Context';

const ShoppingCart = () => 
{
    const { state: { cart } } = CartState();

    const preventClose = (e) =>
    {
        if (cart.length > 0)
        {
            e.stopPropagation();
        }
    }

    const [total, setTotal] = useState();

    useEffect(() => 
    {
        setTotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart]);

    return (
        <div className="shopping-cart dropdown-menu py-2" aria-labelledby="shoppingCartDropdownToggle" onClick={preventClose}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {cart.length === 0 ? 
                        (<>
                            <div className="container m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col m-0 p-0 text-center"> 
                                        Your shopping cart is empty! 
                                    </div>
                                    <div className="shopping__cart__empty__close col-1 mx-0 my-auto p-0 text-center">
                                        <i className="fa fa-times-circle align-middle" aria-hidden="true"/>
                                    </div>
                                </div>
                            </div>
                        </>) :
                        (<>
                            <div className="shopping__cart__table">
                                <table className="table table-sm w-100 mb-2">
                                    <thead>
                                        <tr>
                                            <th className="text-start">Product</th>
                                            <th colSpan={3} className="text-center">Quantity</th>
                                            <th className="text-center">Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody> 
                                        {cart.map((item) => 
                                            <ShoppingCartItem key = {item.id} item = {item}/>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="container mx-0">
                                <div className="row cart__total px-2 py-3">
                                    <div className="col">
                                        <h6 className="m-0">Cart Total:</h6>
                                    </div>
                                    <div className="col text-end">
                                        <h5><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></h5>
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <a href="/" className="cart__total__checkout p-2">Proceed to checkout</a>
                                </div>
                            </div>
                        </>)}                             
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;