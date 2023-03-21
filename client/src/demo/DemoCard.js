import React from 'react';
import { CartState } from "../context/Context";
import './demo.css';
import CurrencyFormat from 'react-currency-format';

const DemoCard = ({prod}) => 
{
  const {state: { cart }, dispatch, } = CartState();

  // console.log(cart);

  return (
    <div className="productCard__wrapper bg-white">
      <div>
        <img className="productCard__img" src={prod.imgSrc} alt={prod.name}/>
        <h4>{prod.name}</h4>
        <div className="productCard__price">
            <h5><CurrencyFormat value={prod.price} displayType={'text'} thousandSeparator={true} prefix={'$'}/></h5>
        </div>
        {cart.some((p) => p.id === prod.id) ? 
          (<button className="ProductCard__button danger"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod,
              })
          }
            >Remove from Cart
            </button>)
          :
          (<button 
            className="ProductCard__button"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: prod,
              })
            }
            >Add to Cart</button>)}
      </div>
    </div>
  )
}

export default DemoCard;