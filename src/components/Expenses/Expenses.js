import Card from "./Card";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  // const expenseDate = new Date(2020, 2, 23);
  // const expenseTitle = "Car Insuarance";
  // const expenseAmount = 25.34;
  const [years, setYears] = useState(" 2019, 2020, 2021");
  const [date, setDate] = useState("");
  const dateChangeHandler = (enteredDate) => {
    if (enteredDate === "2019") {
      setYears(" 2020, 2021, 2022");
      setDate("2019");
    } else if (enteredDate === "2020") {
      setYears(" 2019, 2021, 2022");
      setDate("2020");
    } else if (enteredDate === "2021") {
      setYears("2019, 2020, 2022");
      setDate("2021");
    } else if (enteredDate === "2022") {
      setYears("2019, 2020, 2021");
      setDate("2022");
    }
  };
  //filtering according to the years
  const FilteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear() === parseInt(date);
  });
  // console.log(props.items.map((expenses) => (expenses.date))

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={dateChangeHandler} />
        <h2 className="h2title"> There are other options of years {years}</h2>
        <ExpensesChart expenses={FilteredExpenses} />
        <ExpensesList items={FilteredExpenses} />
        {/* uses the map function to return the items in expenses array as individual items dynamically */}

        {/* // { FilteredExpenses.map((expenses) => (
        //   <ExpenseItem
        //     // keys are used to identify items in an array,, getting rid of errors in react
        //     key={expenses.id}
        //     Title={expenses.title}
        //     Date={expenses.date}
        //     Amount={expenses.amount}
        //   />
        // ))}
        { */}

        {/* <ExpenseItem
          Date={expenses[0].date}
          Title={expenses[0].title}
          Amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          Date={expenses[1].date}
          Title={expenses[1].title}
          Amount={expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          Date={expenses[2].date}
          Title={expenses[2].title}
          Amount={expenses[2].amount}
        ></ExpenseItem>
        <ExpenseItem
          Date={expenses[3].date}
          Title={expenses[3].title}
          Amount={expenses[3].amount}
        ></ExpenseItem> */}
      </Card>
    </li>
  );
}
export default Expenses;
