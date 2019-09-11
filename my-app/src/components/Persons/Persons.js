import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    console.log('[Persons.js] rendered..');
    return props.persons.map((person, index) => {        
        return <Person
            name={person.name}
            age={person.age}
            click={() => props.clicked(index)}
            key={person.id}
            change={(event) => props.changed(event, person.id)} />
    })
};



export default Persons;