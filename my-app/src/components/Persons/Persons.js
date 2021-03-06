import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

//  static getDerivedStateFromProps(props, state) {
//     console.log('[Persons.js] getDerivedStateFromProps');
//     return state;
//   }

//   componentWillReceiveProps(props) {
//     console.log('[Persons.js] componentWillReceiveProps', props);
//   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

    render() {
        console.log('[Persons.js] rendered..');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                key={person.id}
                change={(event) => this.props.changed(event, person.id)} />
        })
    }
}


export default Persons;