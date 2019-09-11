import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructer');
  }

  state = {
    persons: [
      { id: 'axa', name: "Ashish", age: 31 },
      { id: 'sss', name: "Tripti", age: 27 },
      { id: 'axcda', name: "Amyra", age: 1 }
    ],
    otherState: "some value",
    showPersons: false
  }

  switchnameHandler = (sirName) => {
    this.setState({
      persons: [
        { name: "Ashish " + sirName, age: 31 },
        { name: "Tripti", age: 27 },
        { name: "Amyra " + sirName, age: 2 }
      ]
    });
  }

  changeNameHandlerNew = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  toggleShowPersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props  );
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  render() {
    console.log('[App.js] rendered...');
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.changeNameHandlerNew} />
    }
    return (
      <div className={classes.App}>
        <Cockpit title={this.props.title}
          persons={this.state.persons}
          clicked={this.toggleShowPersons}
          showPersons={this.state.showPersons} />
        {persons}
      </div>
    );
  }
}

export default App;