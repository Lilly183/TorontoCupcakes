import React from 'react';
import { CartState } from '../context/Context';
import CurrencyFormat from 'react-currency-format';
import '../css/ShoppingCartItem.css';

const ShoppingCartItem = ({item}) => 
{
    const {state: { cart }, dispatch, } = CartState();

    return (
        <tr className="align-middle">
            <td className="product__cart__item container-fluid px-0" style={{"maxWidth" : "50%"}}>
                <div className="row mx-0">                
                    <div className="product__cart__item__pic col my-auto me-2 px-0 py-1">
                        <img src={process.env.PUBLIC_URL + item.imgSrc} alt=""/>
                    </div>
                    <div className="product__cart__item__text col my-auto px-0">
                        <h6 className="row mx-0">{item.name}</h6>
                        <h5 className="row m-0"><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></h5>
                    </div>
                </div>
            </td>
            <td className="text-end pe-0">
                <button type="button" className="fa fa-solid fa-minus p-1 qty__control float-end" onClick={(e) => dispatch({type: "CHANGE_CART_QTY", payload: { id: item.id, qty: (item.qty > 1) ? (--item.qty) : item.qty}, })}></button>
            </td>
            <td className="text-center" style={{"width" : "5%"}}>
                <button type="button" className="product__cart__item__qty align-middle">{item.qty}</button>
            </td>
            <td className="text-start ps-0">
                <button type="button" className="fa fa-solid fa-plus p-1 qty__control float-start" onClick={(e) => dispatch({type: "CHANGE_CART_QTY", payload: { id: item.id, qty: (item.qty < 99) ? ++item.qty : item.qty}, })}></button>
            </td>
            <td className="cart__price text-center px-2" style={{"width" : "30%"}}>
                <CurrencyFormat value={item.price * item.qty} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
            </td>
            <td className="text-end ps-0"><i className="fa fa-trash fa-lg d-flex align-items-center justify-content-center" 
                onClick = {() => 
                dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                })}></i>
            </td>
        </tr>
    )
}

export default ShoppingCartItem;