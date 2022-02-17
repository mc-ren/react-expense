import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// my custom event handler is onSaveExpenseData
// says this get triggered when something happens in that component

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
   // console.log(expenseData);
    props.onAddExpense();
  };

  // the below passing function is how you tie
  // together components in react.
  // and how you communicate up.
  // how you make a child communicate up to a parent.
  // pass funcs through props. 
  // pass around a pointer to a function.
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
