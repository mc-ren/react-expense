import React, { useState } from "react";
import "./ExpenseForm.css";

// whenever you need to update state and you depend on previous
// dont do like this with the ...
// do setUserInput(() => {}) pass a function to a function

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // alternative to above is:
  // one state
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    //event.target.value
    // if the title changes it goes here
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    // guarantee the states (safer way)
    // state update depends on previous then do it like this.
    // setUserInput((previousState) => {
    //     return { ...previousState, enteredTitle: event.targe.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //    setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value,
    //     });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
  };

  // pass this data around. (HOW?)
  // parent to child or about the other direction?
  const submitHandler = (event) => {
    // handle submit with javascript not postback
    event.preventDefault();

    const expenseDataObject = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // lets say we want pass this somewhere
    // ultimately to the App.js.
    // bubble the stuff up
    // you have to pass to parent to child.
    props.onSaveExpenseData();
    //console.log(expenseDataObject);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // two way binding.. add value attribute and set..
  // clear out after form submit
  // two way binding works with forms
  // gather input and change it.

  // input is a component props (onChange)
  // we can create our own event props
  // allows us to pass functions
  // allows us to pass data

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
