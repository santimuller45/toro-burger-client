import React from "react";
import styles from "./RegisterPage.module.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerValidate from "./validate/registerValidate.js";

// React-Bootstrap
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const RegisterPage = () => {

    const navigate = useNavigate();

    const [formRegister, setFormRegister] = useState({
        email: '',
        password:'',
        repeatPassword: '',
        firstname: '',
        lastname: '',
        address: '',
        cp: '',
        city: '',
        country: 'Argentina',
        phone: '',
    });

    const [errors , setErrors] = useState({
        email: '',
        password:'',
        repeatPassword: '',
        firstname: '',
        lastname: '',
        address: '',
        cp: '',
        city: '',
        country: 'Argentina',
        phone: '',
    })

    const handlerInputChange = (e) => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value
        });
        setErrors(registerValidate({
            ...formRegister, 
            [e.target.name]: e.target.value
        }));
    };

    const handlerSubmitRegister = (e) => {
        e.preventDefault();
        axios.post('/users', formRegister)
        .then(res => {
            alert("Usuario Creado Correctamente!");
            navigate('/login');
        })
        .catch(error => alert(error.message));
    };


    return (
        <div className="container-fluid">
            <div className={styles.formContainer}>
                <Form onSubmit={handlerSubmitRegister} id="formToSend">
                    <h2>Register</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese email" id="email" name="email"
                                value={formRegister.email}
                                onChange={handlerInputChange}
                            />
                            <p style={{color: "red"}}>{errors.email}</p>     
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password" id="password" name="password"
                                value={formRegister.password}
                                onChange={handlerInputChange}
                            />
                            <p style={{color: "red"}}>{errors.password}</p>     
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Repeat password" id="repeatPassword" name="repeatPassword"
                                value={formRegister.repeatPassword}
                                onChange={handlerInputChange}
                            />
                            <p style={{color: "red"}}>{errors.repeatPassword}</p>     
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre" id="firstname" name="firstname"
                                value={formRegister.firstname}
                                onChange={handlerInputChange}
                            />     
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su apellido" id="lastname" name="lastname"
                                value={formRegister.lastname}
                                onChange={handlerInputChange}
                            />     
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su dirección" id="address" name="address"
                                value={formRegister.address}
                                onChange={handlerInputChange}
                            />     
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su Código Postal" id="cp" name="cp"
                                value={formRegister.cp}
                                onChange={handlerInputChange}
                            />     
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la ciudad" id="city" name="city"
                                value={formRegister.city}
                                onChange={handlerInputChange}
                            />     
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ingrese su número de teléfono" id="phone" name="phone"
                                value={formRegister.phone}
                                onChange={handlerInputChange}
                            />     
                        </Form.Group>
                    </Row>
                    <Button variant="success" type="submit">Register</Button>
                </Form>
            </div>
        </div>
    )
};

export default RegisterPage;