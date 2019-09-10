import React from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {
    let btnClass = '';
     const classesArr = [];//'red', 'bold'
     if(props.persons.length <=2) {
       classesArr.push(classes.red);
     }
     if(props.persons.length <=1) {
       classesArr.push(classes.bold);
     }
     if(props.showPersons) {
        btnClass = classes.Red;
     }
    return (
        <div className={classes.Cockpit}>
            <h1>I am a React App</h1>
            <p className={classesArr.join(' ')}> This is really working!!</p>
            <button className={btnClass}
            onClick={props.clicked} >Toggle</button>< br/>
        </div> 
    )
}

export default Cockpit;