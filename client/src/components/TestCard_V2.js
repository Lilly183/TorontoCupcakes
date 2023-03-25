import React from 'react';
import "../demo-card-test/TestCard_V2.css";
import CurrencyFormat from 'react-currency-format';
import { CartState } from "../context/Context";

// https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/arthur.png?alt=media&token=7e0f09e6-1369-42c5-9c98-af99946fae72)
// https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=400
// process.env.PUBLIC_URL + "/assets/img/825x825/01 - Chocolate Peanut Butter.png"

{/* <div className="prodImg w-100" style={{"backgroundImage": "url(https://images.pexels.com/photos/2340254/pexels-photo-2340254.jpeg?auto=compress&cs=tinysrgb&w=400)"}}></div> */}
{/* <button className="prodButton prodButton-light btn w-100">Add to Cart</button> */}

const TestCard_V2 = ({prod}) => {

  const {state: { cart }, dispatch, } = CartState();

  return (
    <div className="containerCards">
      <div className="card">
        <div className="wrapper">
          <title className="prodName w-100 text-center py-1 rounded-top">Test Title</title>
          <div className="prodBackground w-100 border-top border-bottom border-dark"></div>
          <img className="prodImg start-50 translate-middle-x" src={process.env.PUBLIC_URL + "/assets/img/825x825/21-Hot-Fudge-Sundae.png"} alt=""></img>
          <div className="prodPrice w-100 d-flex">
            <CurrencyFormat value={50} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true}/>
          </div>
          <div className="prodInfo container px-0 justify content-between">
            <summary className="row align-items-center m-0 py-2">
              This is a test description.
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
    </div>
  )
}

export default TestCard_V2;