import React from "react";
import style from "./Account.module.css"
// import axios from "axios";
import { useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";

// REACT-BOOSTRAP
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';

// FALTA FUNCIONALIDAD DE CAMBIAR DATOS DE LA CUENTA DEL USUARIO

const Account = () => {

    const navigate = useNavigate();
    const user = useSelector(state => state.userLogin);

    const [ userDetail , setUserDetail ] = useState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        address: user.address,
        cp: user.cp,
        city: user.city,
        country: user.country,
        phone: user.phone
    });

    const changeHandlerSubmit = () => {};

    const handlerSubmit = () => {};

    useEffect(() => {
        !user.email && navigate('/');
    }, [user]);

    return (
        <div className="container-fluid">
                <Form onSubmit={handlerSubmit}>
                    <div className={style.title}>
                        <h1 className="col-7 bg-black opacity-75 rounded-pill text-white text-center p-1">Account Settings</h1>
                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label><strong>Email</strong></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={userDetail.email}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label><strong>Nombre</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                value={userDetail.firstname}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formLastName">
                            <Form.Label><strong>Apellido</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                value={userDetail.lastname}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formAddress">
                            <Form.Label><strong>Dirección</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="address"
                                value={userDetail.address}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCp">
                            <Form.Label><strong>Código Postal</strong></Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="cp"
                                value={userDetail.cp}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label><strong>Ciudad</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="city"
                                value={userDetail.city}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formCountry">
                            <Form.Label><strong>País</strong></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="country"
                                value={userDetail.country}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label><strong>Teléfono</strong></Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="phone"
                                value={userDetail.phone}
                                disabled
                                onChange={changeHandlerSubmit}
                            />
                        </Form.Group>
                    </Row>
                </Form>
        </div>
    )
};

export default Account;