import { createContext, useContext, useReducer, useEffect } from "react";
import productsArr from '../demo/data';
import { cartReducer } from "./Reducer";

import Axios from "axios";

const Cart = createContext();

const Context = ({children}) => 
{
    /*============================REVISIT THIS!============================*/
    
    // useEffect(() => 
    // {
    //     Axios.get("/api/fetchProducts").then((response) =>
    //     {
    //         console.log(response.data);
    //     })
    // }, [])
    
    /*============================REVISIT THIS!============================*/
    
    const products = productsArr.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        imgSrc: product.image,
        description: product.description,
    }));

    const [state, dispatch] = useReducer(cartReducer,
    {
        products: products,
        cart: [],
    });

    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => 
{
    return useContext(Cart);
}

export default Context;