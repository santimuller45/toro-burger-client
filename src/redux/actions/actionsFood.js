import axios from "axios";
import { GET_FOOD_MENU , GET_FOOD_BY_NAME } from "../types/typesFood.js";

export const foodMenu = () => {
    return async function (dispatch) {
        try {
            const info = await axios("/foods");
            return dispatch({
                type: GET_FOOD_MENU,
                payload: info.data
            });
        } catch (error) {
            return { error: error.message };
        }     
    }
};

export const getFoodByName = ( name ) => {
    return async function (dispatch) {
        try {
            const food = await axios.get(`/foods?name=${name}`);
            if (food === null) throw Error('Menú no encontrado');
            return dispatch ({ 
                type: GET_FOOD_BY_NAME, 
                payload: food.data
            });
        } catch (error) {
          return { error: error.message };
        };
    }
};