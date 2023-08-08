import React from "react";
import style from "./SearchBox.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFoodByName } from "../../redux/actions/actionsFood.js";

//REACT-BOOSTRAP

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const SearchBox = () => {

    const [ food , setFood ] = useState('');
    const dispatch = useDispatch();
    const foodHandler = (e) => {
        e.preventDefault();
        setFood(e.target.value);
    };
    const searchHandler = (e) => {
        e.preventDefault();
        if (!food) window.alert('Agregue una comida a buscar...');
        else {
            dispatch(getFoodByName(food));
            console.log(food)
        }
    };

    return (
        <Form onSubmit={searchHandler} className='col-6 mx-auto mt-3'>
             <Stack direction="horizontal" >
                <Form.Control 
                    className="me-auto"
                    type="text"
                    placeholder="Buscar..."
                    name='food'
                    onChange={foodHandler}
                />
                <Button variant="btn btn-outline-success" type='submit' >🔎</Button>
                <Button variant="btn btn-danger" type='reset' >X</Button>
             </Stack>
        </Form>
    )
};

export default SearchBox;