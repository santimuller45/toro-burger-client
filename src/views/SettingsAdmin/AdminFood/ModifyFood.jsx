import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

//REACT-BOOSTRAP
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//>

//Alertas
import swal from "sweetalert";
//>

const ModifyFood = ({ foodID, foodName, show, handleClose }) => {

    const [form , setForm] = useState({
        id: foodID,
        name: "",
        image: "",
        description: "",
        price: "",
    });
    const [button, setButton] = useState(true);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put('/foods', { id: foodID, name: form.name, image: form.image, description: form.description, price: form.price});
            if (result) {
                setForm({
                    id: "",
                    name: "",
                    image: "",
                    description: "",
                    price: "",
                });
                handleClose(false)
                swal("Successfully!", "Modified successfully", "success");
            }
        } catch (error) {
            swal("Error", "Error in modify", "error");
        }
    };
    
    useEffect(() => {
        if (form.name !== "") {
          setButton(false);
        } else {
          setButton(true);
        }
    }, [form, setButton]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <div>
                    <h3>Food to modify:</h3>
                    <h4>{foodName}</h4>
                    <h4>{foodID}</h4>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <FloatingLabel label="New Name">
                            <Form.Control
                                name="name"
                                placeholder="New name"
                                value={form.name}
                                onChange={handleChange}
                            ></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FloatingLabel label="Description" className="mb-6">
                            <Form.Control
                                name="description"
                                placeholder="new description"
                                value={form.description}
                                onChange={handleChange}
                            ></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <FloatingLabel label="Image">
                        <Form.Control
                            name="image"
                            placeholder="new image"
                            value={form.image}
                            onChange={handleChange}
                        ></Form.Control>
                        </FloatingLabel>
                    </Form.Group>
                    <br />
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel label="Price">
                                    <Form.Control
                                        name="price"
                                        type="number"
                                        placeholder="new price"
                                        value={form.price}
                                        onChange={handleChange}
                                    ></Form.Control>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" disabled={button}>Modify data</Button>
                </Form>
            </Modal.Body>
        </Modal>
)};

export default ModifyFood;