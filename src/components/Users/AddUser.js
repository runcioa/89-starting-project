import React, {useState} from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";

import classes from './AddUser.module.css'

const AddUser = (props) => {
    
    const [enteredUserName, setEnterderdUserName] = useState('');
    const [enteredUserAge, setEnterderdUserAge] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();
        
        if (enteredUserName.length === 0 || setEnterderdUserAge ===0) {
            return;
        }

        if (+enteredUserAge < 0 ){
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


    return (
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}  >
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value= {enteredUserName} onChange= {usernameChangeHandler}/>
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="numeber" value={enteredUserAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;