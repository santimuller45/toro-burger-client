import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

//CUSTOM HOOKS
import { useCart } from "../../customHooks/useCart.js";
//>

//REACT-BOOSTRAP
import Button from "react-bootstrap/esm/Button";
import Table from 'react-bootstrap/Table';
//>

function Cart () {

    const navigate = useNavigate();
    const { cart , addToCart , removeFromCart , clearCart } = useCart();
    const [ totalCart , setTotalCart ] = useState(0);

    const sumaTotal = () =>  {
        cart.length > 0 
        ?
        setTotalCart(cart.reduce(( acc ,item ) => acc + item.total ,0))
        : setTotalCart(0);
    };

    useEffect(() => {
        sumaTotal();
    },[cart])

    return (
        <div>
            {console.log(cart)}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="text-center">
                        <th>Menú</th>
                        <th>Cantidad</th>
                        <th>Precio Unidad</th>
                        <th>Subtotal</th>
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
                            <td>{elem.total}</td>
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
                        <td>${totalCart}</td>
                    </tr>
                </tbody>
            </Table>
            <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
                <Button variant="success" onClick={() => navigate('/cart/checkout')}>Finalizar Pedido</Button>
                <Button variant="danger" onClick={() => clearCart()}>Limpiar Carrito</Button>
            </div>
        </div>
    )
};

export default Cart;