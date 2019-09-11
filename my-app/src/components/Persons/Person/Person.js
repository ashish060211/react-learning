import React from 'react';
import  classes from './Person.css';

const person = (props) => {
    console.log('[Person.js rendering..]');
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm a {props.name} and my age is {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="textbox" value={props.name} onChange={props.change} />
        </div>
    )
};

export default person;
