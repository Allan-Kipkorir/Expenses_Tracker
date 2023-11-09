import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found</h2>;
  }
  return (
    <ul className=" expenses-list">
      {props.items.map((expenses) => (
        <ExpenseItem
          // keys are used to identify items in an array,, getting rid of errors in react
          key={expenses.id}
          Title={expenses.title}
          Date={expenses.date}
          Amount={expenses.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
