import React from "react";
import styles from "./LoginPage.module.css"
import { useState , useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/actionsUser.js";

// React-Bootstrap
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.userLogin)

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: ""
    });

    const submitLoginHandler = (e) => {
        e.preventDefault();
        dispatch(userLogin(formLogin));
    };

    const handlerInputChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name] : e.target.value
        });
    };

    useEffect(() => {
        if (user.email) navigate('/');
    },[])

    return (
        <div className="container-fluid">
            <div className={styles.formContainer}>
                <Form onSubmit={submitLoginHandler}>
                    <h2>Login</h2>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese email" id="email" name="email"
                                value={formLogin.email}
                                onChange={handlerInputChange}
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese password" id="password" name="password"
                                value={formLogin.password}
                                onChange={handlerInputChange}
                            />
                        </Form.Group>
                        <br/>
                        <Button variant="success" type="submit">Login</Button>
                    </Row>
                </Form>
                <Row className="mb-3">
                    <Link to='/register'>Registrarse ahora</Link>
                </Row>
            </div>
        </div>
    )
};

export default LoginPage;