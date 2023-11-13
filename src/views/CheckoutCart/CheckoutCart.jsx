import React from "react";
import style from "./CheckoutCart.module.css";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//CUSTOM HOOKS
import { useCart } from "../../customHooks/useCart";
//>

// REACT-BOOSTRAP
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
//>

const CheckoutCart = () => {

    const { cart } = useCart();
    const user = useSelector(state => state.userLogin);
    const navigate = useNavigate();

    const [ methodPay , setMethodPay ] = useState('MercadoPago');
    const [ delivery , setDelivery ] = useState('Retirar');

    const [ totalCart , setTotalCart ] = useState(0);
    const sumaTotal = () =>  {
        cart.length > 0 
        ?
        setTotalCart(cart.reduce(( acc ,item ) => acc + item.total ,0))
        : setTotalCart(0);
    };

    useEffect(() => {
        !user.email && navigate('/login');
        sumaTotal();
    },[ cart, methodPay, delivery , user ])

    return (
        <div>
            <h1 className="text-center">Detalle de Compra</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr className="text-center">
                        <th>Menú</th>
                        <th>Cantidad</th>
                        <th>Precio Unidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                {cart?.map(elem => (
                    <tbody key={elem.id}>
                        <tr className="text-center">
                            <td>{elem.name}</td>
                            <td>{elem.quantity}</td>
                            <td>{elem.price}</td>
                            <td>{elem.total}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>TOTAL A PAGAR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td><strong>${totalCart}</strong></td>
                    </tr>
                </tbody>
            </Table>
            <div className={style.selects}>
                <label> Método de Pago </label>
                <select className="text-center" onChange={(e) => setMethodPay(e.target.value)}>
                    <option className="text-center" name="MercadoPago" value="MercadoPago">Mercado Pago</option>
                    <option className="text-center" name="Efectivo" value="Efectivo">Efectivo</option>
                </select>
            </div>
            <div className={style.selects}>
                <label> Pedido a </label>
                <select className="text-center" onChange={(e) => setDelivery(e.target.value)}>
                    <option className="text-center" name="Retirar" value="Retirar">Retirar</option>
                    <option className="text-center" name="Enviar" value="Enviar">Enviar</option>
                </select>
            </div>
            <div className={style.botones}>
                <Button variant="danger" onClick={() => navigate(-1)}>Volver</Button>
                <Button variant="success" onClick={() => {}}>Pagar</Button>
            </div>
        </div>
    )
};

export default CheckoutCart;