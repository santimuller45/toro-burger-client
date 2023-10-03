import React, { createContext , useReducer } from "react";
import axios from "axios";

export const LoginContext = createContext();

const initialState = JSON.parse(window.localStorage.getItem('user')) || {};

const USER_ACTION_TYPES = {
    LOGIN_USER : 'LOGIN_USER',
    LOGOUT_USER : 'LOGOUT_USER'
};

const updateUserLocalStorage = (state) => window.localStorage.setItem('user', JSON.stringify(state));

const reducer = ( state , action ) => {

    const { type: actionType , payload: actionPayload } = action;

    switch ( actionType ) {

        case USER_ACTION_TYPES.LOGIN_USER: {
            return { user: actionPayload };
        };

        case USER_ACTION_TYPES.LOGOUT_USER: {
            updateUserLocalStorage({});
            return {};
        };

        default : { 
            return state 
        }
    }
}

export function LoginProvider ({ children }) {

    const [ state , dispatch ] = useReducer( reducer, initialState);

    const loginUser = async ({ email, password }) => {
        try {
          const user = await axios.post('/users/login', { email, password });
          updateUserLocalStorage(user.data);
          dispatch({
            type: USER_ACTION_TYPES.LOGIN_USER,
            payload: user.data
          });
        } catch (error) {
            return { error: error.message };
        }
    };
    

    const logoutUser = () => dispatch({ type: USER_ACTION_TYPES.LOGOUT_USER });

    return (
        <LoginContext.Provider value={{ user: state , loginUser, logoutUser }}>
            {children}
        </LoginContext.Provider>
    )
};