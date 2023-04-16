import { createContext, useContext, useReducer, useEffect } from "react";
import fallbackArr from '../fallback/Fallback';
import { cartReducer } from "./Reducer";
import Axios from "axios";

const Cart = createContext();

const initialState = 
{
    products: [],
    cart: [],
};

const Context = ({children}) => 
{
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() =>
    {
        Axios.get("/api/fetchProducts")
        .then((response) => 
        {
            dispatch(
            {
                type: "INITIALIZE_CART",
                payload: 
                {
                    ...initialState,
                    products: response.data.map((product) =>
                    ({
                        id: product.PRODUCT_ID,
                        name: product.NAME,
                        description: product.DESCRIPTION, 
                        imgSrc: product.IMAGE,
                        price: product.PRICE
                    })),
                },
            });
        })
        .catch((error) => 
        {
            if (error.response)
            {
                console.log("The client made a request, and the server's response was an error. (Did you remember to start the server?)");
                console.log(error.response.data);
            }

            else if (error.request)
            {
                console.log("The client made a request, but it never received a response from the server.")
                console.log(error.request);
            }

            else
            {
                console.log("Something happened when the client was setting up a request that has triggered an error.", error.message);
            }

            dispatch(
            {
                type: "INITIALIZE_CART",
                payload: 
                {
                    ...initialState,
                    products: fallbackArr.map((product) => 
                    ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        imgSrc: product.image,
                        price: product.price
                    })),
                },
            });
        })
    }, []);

    return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export const CartState = () => 
{
    return useContext(Cart);
}

export default Context;