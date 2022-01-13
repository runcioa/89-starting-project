import React, { useState, useRef } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";

import classes from './AddUser.module.css'

import ErrorModule from "../UI/ErrorModal";

import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

   
    const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.length === 0 || enteredAge === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value)'
            })
            return;
        }

        if (+enteredAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (non-empty value)'
            })
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

       
    }



    const errorHandler = () => {
        setError(null);
    }


    return (
        <Wrapper>
            {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}  >
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                      
                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input
                        id="age"
                        type="numeber"
                    
                        ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;