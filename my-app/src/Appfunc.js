import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons : [
      {name: "Ashish", age : 31},
      {name:"Tripti", age:27},
      {name: "Amyra", age:1}
    ],
    otherState : "some value"
  });

  const switchnameHandler = () => {
    setPersonsState({
      persons : [
        {name: "Ashish Sharma", age : 31},
        {name:"Tripti", age:27},
        {name: "Amyra", age: 2}
      ]
    });
  }


  return (
      <div className="App">
       <h1>I am App</h1>
       <button onClick={switchnameHandler} >Switch</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} > My hobbies : reading </Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  }

export default App;