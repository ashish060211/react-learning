import React,{Component} from 'react';
import  classes from './Person.css';


class Person extends Component {

    render() {
        console.log('[Person.js rendering..]');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and my age is {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="textbox" value={this.props.name} onChange={this.props.change} />
            </div>
        )
    }
}

export default Person;
