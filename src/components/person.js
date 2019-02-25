import React from 'react';


const person = (props) => {
    return (
        <div className="Person">        
            <h1>Name: {props.name}</h1>
            <p> My age is :{props.age}</p>
            <p onClick={props.click}>{props.children}</p>
            <p>Key should be printed here  :    {props.myKey}</p>
            <button onClick={props.deletePeople}>Delete</button>
        </div>
    );
} 
export default person;