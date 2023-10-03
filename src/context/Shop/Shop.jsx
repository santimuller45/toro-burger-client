import React, { createContext , useReducer } from "react";

export const ShopContext = createContext();

const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

const CART_ACTION_TYPES = {
    ADD_TO_CART : 'ADD_TO_CART',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
    CLEAN_CART : 'CLEAN_CART'
};

const updateCartLocalStorage = (state) => window.localStorage.setItem('cart', JSON.stringify(state));

const reducer = ( state , action ) => {

    const { type: actionType , payload: actionPayload } = action;

    switch ( actionType ) {

        case CART_ACTION_TYPES.ADD_TO_CART: {

            const { id } = actionPayload;
            const productInCart = state.findIndex(item => item.id === id);

            if (productInCart >= 0) {
                const newCartState = structuredClone(state);
                newCartState[productInCart].quantity += 1;
                updateCartLocalStorage(newCartState);
                return newCartState;
            }

            
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ];
            
            updateCartLocalStorage(newState);
            return newState;
        };

        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            
            const { id } = actionPayload;
            const newState = state.filter( item => item.id !== id);

            updateCartLocalStorage(newState);
            return newState;
        };

        case CART_ACTION_TYPES.CLEAN_CART: {
            updateCartLocalStorage([]);
            return []; 
        };
        
        default: {
            return {...state}
        };
    };
};

export function ShopProvider ({ children }) {
    
   const [ state , dispatch ] = useReducer( reducer, initialState);


   const addToCart = product => dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product });

    const removeFromCart = product => dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: product });

    const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAN_CART });

    return (
        <ShopContext.Provider value={{ cart : state , addToCart, removeFromCart , clearCart }}>
            {children}
        </ShopContext.Provider>
    )
};