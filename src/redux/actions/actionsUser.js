import axios from "axios";
import { LOG_IN_USER , LOG_OUT_USER , ALL_USERS , SET_USER  } from "../types/typesUser.js";

export const userLogin = ({ email , password }) => {
    return async function ( dispatch ) {
        try {
            const user = await axios.post('/users/login', { email , password });
            localStorage.setItem('user', JSON.stringify(user.data));
            return dispatch({
                type: LOG_IN_USER,
                payload: user.data
            });

        } catch (error) {
            return { error: error.message };
        }
    }
};

export const userLogOut = () => {
    return function () {
        localStorage.removeItem('user');
        return {
            type: LOG_OUT_USER,
            payload: {}
        }  
    }
};

export const allUsers = () => {
    return async function ( dispatch ) {
        try {
            const allUserDB = await axios('/users');
            return dispatch({
                type: ALL_USERS,
                payload: allUserDB.data
            })
        } catch (error) {
            return { error: error.message };
        }
    }
};

export const setUser = ( data ) => {
    return function( dispatch ) {
        return dispatch ({
            type: SET_USER,
            payload: data
        })
    }
};