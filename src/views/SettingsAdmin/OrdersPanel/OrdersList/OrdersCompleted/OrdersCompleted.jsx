import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//REACT-BOOSTRAP
import Table from "react-bootstrap/esm/Table.js";
//>

//FONT AWESOME -- ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
//>

const ListCompletedOrders = () => {

    const completedOrders = useSelector(state => state.ordersCompleted);
    
    return (
        <div className="container-fluid col-8 mt-3">
            <h3><strong>PEDIDOS COMPLETADOS</strong></h3>
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
                        {completedOrders.map( order => (
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
    )
};

export default ListCompletedOrders;