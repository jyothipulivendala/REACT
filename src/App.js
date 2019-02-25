import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import radium from 'radium';
import Greet from './components/greet';
import Person from './components/person'
import { inherits } from 'util';

class App extends Component {

  state  = {
    persons : [
      {name:"max", age : 39},
      {name : "Jyothi", age : 26},
      {name : "Swathi" , age:20}
    ],
    showPersons : false
  }

  clickButtonHandler = () => {    
    
    const value = this.state.showPersons;
    this.setState({showPersons: !value});
  }
  deleteHandler = (deleteIndex) => {
  const persons = this.state.persons;
  persons.splice(deleteIndex,1);
  this.setState({persons: persons});
  }

  render() {
  const style = {
    backgroundColor : 'green',
    ':hover' : {
      backgroundColor : 'lightblue'
    }

  }
    let users = "Fetching people" ;
    if( this.state.showPersons) {
      users = (
        <div>
          { this.state.persons.map( (people,index) => {
          
              return <Person name={people.name} age={people.age} key={index} myKey={index} deletePeople={() => this.deleteHandler(index)}/>
          })
          }
          style.backgroundColor : 'red';
          
        </div>
      )
    }
    return (
     
      <div className="App">
        <Greet></Greet>
        <button   style={style} onClick={()=>this.clickButtonHandler()}>Button</button>     
        {users}
        </div>
 
    );
  }
}

export default radium(App);
