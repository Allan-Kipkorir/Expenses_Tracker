import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //Title Value
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    return setEnteredTitle(event.target.value);
  };
  //Amount Value
  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    return setEnteredAmount(event.target.value);
  };
  //Date value
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    return setEnteredDate(event.target.value);
  };

  //submitting the form below
  const submitFormHandler = (event) => {
    event.preventDefault();
    //creating an object in react containing all the input of the form
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onAddExpense(expenseData);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min=" 0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCloseForm}> Close </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
