import { GET_FOOD_BY_NAME, GET_FOOD_MENU } from "./types/typesFood.js";
import { LOG_IN_USER , LOG_OUT_USER , ALL_USERS , SET_USER } from "./types/typesUser.js";
import { SET_NEW_ORDER, GET_ALL_ORDERS } from "./types/typesOrder.js";

const initialState = {
    menu: [],
    orders: [],
    allUsers: [],
    userLogin: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD_MENU: {
            return {
                ...state,
                menu: action.payload
            }
        };
        case GET_FOOD_BY_NAME: {
            return {
                ...state,
                menu: action.payload
            }
        };
        ////////////////////////////////////////////////////////////
        case GET_ALL_ORDERS: {
            return {
                ...state,
                orders: action.payload
            }
        };
        case SET_NEW_ORDER:{
            return {
                ...state,
                orders: [...orders , action.payload]
            }
        }
        ////////////////////////////////////////////////////////////
        case ALL_USERS: {
            return {
                ...state,
                allUsers: action.payload
            }
        };
        case LOG_IN_USER: {
            return {
                ...state,
                userLogin: action.payload
            }
        };
        case LOG_OUT_USER: {
            return {
                ...state,
                userLogin: action.payload
            }
        };
        case SET_USER: {
            return {
                ...state,
                userLogin: action.payload
            }
        };
        default: return {...state};
    }
}

export default rootReducer;