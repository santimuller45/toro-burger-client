import React from "react";
import { useState , useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { foodMenu } from "../../../redux/actions/actionsFood.js";

//COMPONENTES DE SETTINGS
import ModifyFood from "./ModifyFood.jsx";
//>

// REACT-BOOSTRAP
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
//>

const AdminFood = () => {

    const dispatch = useDispatch();
    const menuList = useSelector(state => state.menu);
    const [show, setShow] = useState(false);
    const [foodID, setFoodID] = useState("");
    const [foodName, setFoodName] = useState("");

    const handleShow = ( id, name ) => {
        setShow(true);
        setFoodID(id);
        setFoodName(name);
    };

    const handleClose = () => setShow(false);

    useEffect(() => {
        dispatch(foodMenu());
    },[dispatch])
   
    return (
        <>
        <div className="container-fluid col-8 mt-3">
            <br />
            <strong><h3>Products Settings</h3></strong>
            <Table striped size="sm">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Name</th>
                        <th>Modify</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {   menuList.map((food, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{food.name}</td>
                                <td>
                                    <Button
                                        variant="light"
                                        size="sm"
                                        onClick={() => handleShow( food.id, food.name )}
                                        >📝</Button>
                                </td>
                                <td>
                                    <Button variant="light" size="sm">
                                        {food?.status ? "✅" : "❌"}
                                    </Button>
                                </td>
                            </tr>
                        )})}
                </tbody>
                <ModifyFood
                    show={show}
                    foodID={foodID}
                    foodName={foodName}
                    handleClose={handleClose}
                />
            </Table>
        </div>
        </>
    )
}

export default AdminFood;