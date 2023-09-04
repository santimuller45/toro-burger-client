import React, { createContext , useState } from "react";

export const ShopContext = createContext();


export function ShopProvider ({ children }) {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        // const productInCart = cart.findIndex(item => item.id === product.id);

        // if (productInCart >= 0) {
            
        // }

        setCart((prevState) => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    };

    const clearCart = () => setCart([]);

    return (
        <ShopContext.Provider value={{ cart , addToCart, clearCart }}>
            {children}
        </ShopContext.Provider>
    )
};