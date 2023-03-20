import React, { useContext } from 'react';
import './demo.css';
import CurrencyFormat from 'react-currency-format';

import CartContext from '../context/cart/CartContext';


const DemoCard = ({product}) => 
{
  const { addToCart } = useContext(CartContext);

  return (
    <div className="productCard__wrapper bg-white">
      <div>
        <img className="productCard__img" src={product.image}/>
        <h4>{product.name}</h4>
        <div className="productCard__price">
            <h5><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></h5>
        </div>
        <button className="ProductCard__button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default DemoCard;