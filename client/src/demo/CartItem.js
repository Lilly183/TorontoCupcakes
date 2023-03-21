import React, {useContext} from 'react';
import '../demo/DemoCartItem.css';
import CartContext from '../context/Context';
import CurrencyFormat from 'react-currency-format';

const CartItem = ({item}) => 
{
    const { removeItem } = useContext(CartContext);

    return (
        <li className="CartItem_item">
            <img src={item.image} alt=""/>
            <div>
                {item.name} <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
            </div>
            <button className="CartItem__button" onClick={() => removeItem(item._id)}>Remove</button>
        </li>
    )
}

export default CartItem;