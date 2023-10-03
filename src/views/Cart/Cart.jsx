import React from "react";
import { useCart } from "../../customHooks/useCart.js";

//REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";
import Table from 'react-bootstrap/Table';


function Cart () {

    const { cart , addToCart , removeFromCart , clearCart } = useCart();

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="text-center">
                        <th>Menú</th>
                        <th>Cantidad</th>
                        <th>Precio Unidad</th>
                        <th>Agregar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                {cart?.map(elem => (
                    <tbody key={elem.id}>
                        <tr className="text-center">
                            <td>{elem.name}</td>
                            <td>{elem.quantity}</td>
                            <td>{elem.price}</td>
                            <td><Button variant="success" onClick={() => addToCart(elem)}>+</Button></td>
                            <td><Button variant="danger" onClick={() => removeFromCart(elem)}>X</Button></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>$TOTAL PEDIDO</td>
                    </tr>
                </tbody>
            </Table>
            <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
                <Button variant="success" onClick={() => {}}>Finalizar Pedido</Button>
                <Button variant="danger" onClick={() => clearCart()}>Limpiar Carrito</Button>
            </div>
        </div>
    )
};

export default Cart;