import axios from 'axios'
import { GET_ALL_ORDERS, SET_NEW_ORDER , ORDER_IN_PROCESS } from '../types/typesOrder.js'

export const getAllOrders =  () => {
    return async function (dispatch) {
        try {
            const result = await axios('/orders');
            return dispatch({
                type: GET_ALL_ORDERS,
                payload: result.data
            })
        } catch (error) {
            return {error: error.message}
        } 
    }
};

export const setNewOrder = (order) => {
    return async function (dispatch) {
        try {
            const { foodOrder ,amount, shipping, totalAmount, comentary, orderStatus, paymenType, userEmail } = order
            const result = await axios.post('/orders',{ foodOrder, amount, shipping, totalAmount, comentary, orderStatus, paymenType, userEmail } );
            return dispatch({
                type: SET_NEW_ORDER,
                payload: result.data
            })
        } catch (error) {
            return {error: error.message}
        }
    }
};

// export const modifyOrderStatus =  (id, status) => {
//     return async function (dispatch) {
//         try {
//             const result = await axios.put('/orders', { id , status });
//             return dispatch({ 
//                 type: ORDER_IN_PROCESS,
//                 payload: result.data 
//             })
//         } catch (error) {   
//             return {error: error.message}
//         }
//     }
// };