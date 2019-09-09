import React from 'react';
import  './Person.css'

const person = (props) => {
    //return <p>I'm a Person and my age is {Math.floor(Math.random() * 30)} years old.</p>
    //return <p>I'm a {props.name} and my age is {props.age} years old.</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and my age is {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="textbox" value={props.name} onChange={props.change} />
        </div>
    )
};

export default person;
