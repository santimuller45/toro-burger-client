import React from "react";
import style from "./CheckoutCart.module.css";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";

//REDUX
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setNewOrder } from "../../redux/actions/actionsOrder.js";
//>

//CUSTOM HOOKS
import { useCart } from "../../customHooks/useCart.js";
//>

// REACT-BOOSTRAP
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import swal from 'sweetalert';
//>

const CheckoutCart = () => {

    const { cart , clearCart } = useCart();
    const user = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [ methodPay , setMethodPay ] = useState('EFECTIVO');
    const [ delivery , setDelivery ] = useState('RETIRAR');

    const [ totalCart , setTotalCart ] = useState(0);
    const sumaTotal = () =>  {
        cart.length > 0 
        ?
        setTotalCart(cart.reduce(( acc ,item ) => acc + item.total ,0))
        : setTotalCart(0);
    };
    
    const enviarPedido = () => {
        const pedido = {
            foodOrder: cart.map(elem => `${elem.quantity} ${elem.name}`),
            amount: totalCart,
            //editar el envio si es verdadero o falso
            shipping: 500,
            totalAmount: totalCart,
            comentary: "AGREGAR COMENTARIO",
            orderStatus: "PENDIENTE",
            paymenType: methodPay,
            userEmail: user.email
        };
        dispatch(setNewOrder(pedido));
        swal("Gracias por tu compra!", `${user.firstname} ${user.lastname}` , "success");
        clearCart();
        navigate('/')
    }

    useEffect(() => {
        !user.email && navigate('/login');
        sumaTotal();
    },[ cart, methodPay, delivery , user ])

    return (
        <div className={style.container}>
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
                <tbody>
                    
                </tbody>
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
                    <option className="text-center" name="EFECTIVO" value="EFECTIVO">Efectivo</option>
                    <option className="text-center" name="TRANSFERENCIA" value="TRANSFERENCIA">Transferencia</option>
                </select>
            </div>
            <div className={style.selects}>
                <label> Pedido a </label>
                <select className="text-center" onChange={(e) => setDelivery(e.target.value)}>
                    <option className="text-center" name="RETIRAR" value="RETIRAR">Retirar</option>
                    <option className="text-center" name="ENVIAR" value="ENVIAR">Enviar</option>
                </select>
            </div>
            <div className={style.botones}>
                <Button variant="danger" onClick={() => navigate(-1)}>Volver</Button>
                <Button variant="success" onClick={enviarPedido}>Pagar</Button>
            </div>
        </div>
    )
};

export default CheckoutCart;