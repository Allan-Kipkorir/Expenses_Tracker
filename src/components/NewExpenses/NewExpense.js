import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseChangeHandler = (enteredExpenses) => {
    const expenses = {
      ...enteredExpenses,
      id: Math.random().toString()
    };
    props.onExpenses(expenses);
    // console.log(expenses);
  };
  const closeFormHandler = () => {
    setExpense(<button onClick={formHandler}> Add New Expense </button>);
  };
  const formHandler = () => {
    setExpense(
      <ExpenseForm
        onCloseForm={closeFormHandler}
        onAddExpense={expenseChangeHandler}
      />
    );
  };
  const [expense, setExpense] = useState(
    <button onClick={formHandler}> Add New Expense </button>
  );
  //
  return <div className="new-expense">{expense}</div>;
};
export default NewExpense;
