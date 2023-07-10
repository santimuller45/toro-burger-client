import axios from "axios";
import { GET_FOOD_MENU } from "../types/typesFood.js";

const foodMenu = () => {
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

export default foodMenu;