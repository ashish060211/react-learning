import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons : [
      {id:'axa',name: "Ashish", age : 31},
      {id:'sss',name:"Tripti", age:27},
      {id:'axcda',name: "Amyra", age:1}
    ],
    otherState : "some value",
    showPersons : false
  }

  switchnameHandler = (sirName) => {
    this.setState({
      persons : [
      {name: "Ashish "+ sirName, age : 31},
      {name:"Tripti", age:27},
      {name: "Amyra "+ sirName, age:2}
      ]
    });
  }

  changeNameHandler = (event) => {
    this.setState({
      persons : [
      {name: "Ashish", age : 31},
      {name: event.target.value, age:27},
      {name: "Amyra ", age:1}
      ]
    });
  }

  changeNameHandlerNew = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }

  toggleShowPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  deletePersonHandler = (index) => {
    //const persons = this.state.persons; // here we are mutating original persons state which is not a good practice.
    //const persons = this.state.persons.splice();// here we got a copy of persons
    const persons = [...this.state.persons]
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  render () {
    // for inline style pseudo selectors like hover, media query etc will not work.
    const style = {
      padding : '8px',
      font:'calibri',
      border:'1px solid blue',
      backgroundColor : 'green',
      color:'white',
      cursor:'pointer'
    }
    const classes = [];//'red', 'bold'
    if(this.state.persons.length <=2) {
      classes.push('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
      <div> {
        this.state.persons.map((person, index) => {
          return <Person 
          name={person.name} 
          age={person.age} 
          click={() => this.deletePersonHandler(index)}
          key={person.id} 
          change = {(event) => this.changeNameHandlerNew(event, person.id)} />
        })
      }
       </div>
      );
      style.backgroundColor='red';
    } 
    return (
      <div className="App">
       <h1>I am a React App</h1>
       <p className={classes.join(' ')}> This is really working!!</p>
       <button style = {style} onClick={this.toggleShowPersons} >Toggle</button>< br/>
       { persons }
      </div>
    );
  }
}

export default App;
//<button style = {style} onClick={() => this.switchnameHandler("Sharma")} >Switch opt2</button>
// <button style = {style} onClick={this.switchnameHandler.bind(this, "Sharma")} >Switch</button>< br/>
/*
  <Person name={this.state.persons[0].name} age={this.state.persons[0].age}  click={this.switchnameHandler.bind(this, "S") }/>
  <Person name={this.state.persons[1].name} age={this.state.persons[1].age} change={this.changeNameHandler} > My hobbies : reading </Person>
  <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
*/