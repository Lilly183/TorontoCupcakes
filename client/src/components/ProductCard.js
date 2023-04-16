import React from 'react';
import { CartState } from '../context/Context';
import CurrencyFormat from 'react-currency-format';
import '../css/ProductCard.css';

const ProductCard = ({prod}) => 
{
    const {state: { cart }, dispatch, } = CartState();

    return (
        <div className="card col-lg-2 col-md-4 col-sm-6 px-0">
            <div className="wrapper">
                <title className="prodName w-100 text-center py-1 rounded-top">{prod.name}</title>
                <div className="prodBackground w-100 border-bottom border-dark"></div>
                <img className="prodImg start-50 translate-middle-x" src={process.env.PUBLIC_URL + prod.imgSrc} alt={prod.name}></img>
                <div className="prodPrice w-100 d-flex">
                    <CurrencyFormat value={prod.price} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
                </div>
                <div className="prodInfo container px-0 justify content-between">
                    <summary className="row align-items-center m-0 py-2">
                        {prod.description}
                    </summary>
                    {cart.some((p) => p.id === prod.id) ? 
                    (<button className="prodButton prodButton-dark btn w-100"
                        onClick={() => 
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                        })
                        }>Remove from Cart
                    </button>)
                    :
                    (<button className="prodButton prodButton-light btn w-100"
                        onClick={() => 
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: prod,
                        })
                        }>Add to Cart
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;