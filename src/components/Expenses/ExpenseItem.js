import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
// named import to enable states; most important hook
// can only be called inside of react functions.
// no call in nested functions. 
import React, { useState } from 'react';

import './ExpenseItem.css';

function ExpenseItem(props) {

// returns a function that we can call. an array
// the 1st the value, and a function.
 const [title, setTitle] = useState(props.title); // react hook.
// convention is the name, and 'set' 'with name repeated' 
// always 2 elements.
// specific instance. (per component instance basis)

  const clickHandler = () => {
    // this calls the 2nd const function. managed by react
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={ clickHandler }>Change title</button>
    </Card>
  );
}

export default ExpenseItem;

// all html elements we have access to native dom events.
// html button. dom interface. 
// there is a prop equiv in react. 
// all on props what a function passed as a value
// that is executed when that even occurs.
// in 'on' events you usually don't want to in-line it.
// just point at the function, don't pass into it because
// javascript will run, just point at the function. 
// so not executed when javascript is evaluated. 
// onClick is available on all, default dom behavior.
// name convention end with 'Handler'. So it is not 
// called by us, but used by event listener.

// your component is a function. So you have to call them
// under the hood jsx is like a function call. you make
// react aware of a function. React calls the functions
// in jsx then what they use until no more functions left.
// all started at the index.js file. 

// react never repeats, when initially rendered. So need 
// a way something changed and a component should be re-evalueated

// this is state.. (re-evaluate and re-draw)

// state is needed for screen changes.

