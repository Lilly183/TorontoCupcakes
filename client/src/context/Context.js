import { createContext, useContext, useReducer } from "react";
import productsArr from '../demo/data';
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({children}) => 
{
    const products = productsArr.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        imgSrc: product.image
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