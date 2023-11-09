import "./ExpenseDate.css"

function ExpenseDate(props) {
  const month = props.Date.toLocaleString("en-US", { month: "long" });
  const date = props.Date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.Date.getFullYear();
  return (
    <div className= 'expense-date'>
      <div className="expense-date__month">{month}</div>
      <div className = "expense-date__year">{year}</div>
      <div className = "expense-date__day">{date}</div>
    </div>
  );
}
export default ExpenseDate;
