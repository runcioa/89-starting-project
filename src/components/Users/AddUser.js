import React, { useState } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";

import classes from './AddUser.module.css'

import ErrorModule from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUserName, setEnterderdUserName] = useState('');
    const [enteredUserAge, setEnterderdUserAge] = useState('');
    const [error, setError] = useState();

    const AddUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.length === 0 || setEnterderdUserAge === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty value)'
            })
            return;
        }

        if (+enteredUserAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (non-empty value)'
            })
            return;
        }

        props.onAddUser(enteredUserName, enteredUserAge);

        setEnterderdUserAge('');
        setEnterderdUserName('');
    }

    const usernameChangeHandler = (event) => {
        setEnterderdUserName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnterderdUserAge(event.target.value);
    }

    const errorHandler = ()=>{
        setError(null);
    }


    return (
        <div>
            {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}  >
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age(Years)</label>
                    <input id="age" type="numeber" value={enteredUserAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;