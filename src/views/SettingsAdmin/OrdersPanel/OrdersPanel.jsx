import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './OrdersPanel.module.css'

//COMPONENTES
import { getAllOrders } from "../../../redux/actions/actionsOrder.js";
//>

//REACT-BOOSTRAP
import Table from "react-bootstrap/esm/Table.js";
//>

//FORT AWESOME -- ICONOS GENIALES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
//>

const OrderPanel = () => {

    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders)
    
    useEffect(() => {
        dispatch(getAllOrders());
    },[dispatch])


    return (
        <div className={style.container}>
            <h3><strong>PEDIDOS PENDIENTES</strong></h3>
            <div className="container-fluid col-8 mt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Usuario</th>
                            <th>Orden</th>
                            <th>Total</th>
                            <th>Estado del pedido</th>
                            <th>Hora del pedido</th>
                            <th>Tipo de pago</th>
                            <th>Comentarios</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map( order => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order?.users[0]?.email}</td>
                                <td>{order.foodOrder}</td>
                                <td>{order.totalAmount}</td>
                                <td>{order.orderStatus}</td>
                                <td>{order.updated}</td>
                                <td>{order.paymenType}</td>
                                <td>{order.comentary}</td>
                                <td><Link to={`/orders/detail/${order.id}`}><FontAwesomeIcon icon={faEye}/></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <h1>MODIFICAR LOS PENDIENTES Y NO PENDIENTES // HACER OTRO COMPONENTE A PARTE PARA MOSTRARLOS</h1>
        </div>
    )};

export default OrderPanel;