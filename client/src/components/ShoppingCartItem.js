import React, {useContext} from 'react';
import imgRelPath from './template/ImgRelPath';
import CartContext from '../context/cart/CartContext';
import CurrencyFormat from 'react-currency-format';

const ShoppingCartItem = ({item}) => {

    const { removeItem } = useContext(CartContext);

    return (
        <tr className="align-middle">
            <td className="product__cart__item container-fluid px-0" style={{"maxWidth" : "50%"}}>
                <div className="row mx-0">                
                    <div className="product__cart__item__pic col my-auto me-2 px-0 py-1">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="product__cart__item__text col my-auto px-0">
                        <h6 className="row mx-0">{item.name}</h6>
                        <h5 className="row m-0"><CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/></h5>
                    </div>
                </div>
            </td>
            <td className="text-end pe-0">
                <button type="button" className="fa fa-solid fa-minus p-1 qty__control"></button>
            </td>
            <td className="text-center" style={{"width" : "1%"}}>
                {/* <input className="text-center" type="number" step="1" min="1" max="99" name="quantity" defaultValue={"1"} pattern="[0-9]*" inputMode="numeric"/> */}
                <button type="button" className="product__cart__item__qty text-center">1</button>
            </td>
            <td className="text-start ps-0">
                <button type="button" className="fa fa-solid fa-plus p-1 qty__control"></button>
            </td>
            <td className="cart__price text-center px-2">
                <CurrencyFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
            </td>
            <td className="text-end ps-0"><i className="fa fa-trash fa-2x" onClick={() => removeItem(item._id)}></i></td>
        </tr>
    )
}

export default ShoppingCartItem;