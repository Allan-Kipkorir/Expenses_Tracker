import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate Date={props.Date} />
      <div className="expense-item__description">
        <h2>{props.Title} </h2>
        <div className="expense-item__price"> ${props.Amount} </div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
