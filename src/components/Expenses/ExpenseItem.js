//components are just function which then return html.
//only one return element per return statement
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { useState } from "react";
//normal variable change or any event will not allow re-rendering of entire code of functional component
//useState is function which tells react to reevaluate the entire code once any event occurs unlike simple event handler.
//useState is a react-hook.They always start with 'use'
//They must be directly written in a component.They can't be written in a nested component and also not outside any component
//props is an object which is used to pass data between components.This data will be in the form of key-value pairs.
const ExpenseItem = (props) => {
  //component=html+css+javascript
  //any javascript code comes before the return statement.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const expenseAmount = props.amount;
  //useState uses a special variable and change in that variable will force re-rendering the entire component code
  const [expenseTitle, setTitle] = useState(props.title);
  //first value on LHS is the current state value and the second is the function for updating that value.
  //props.title is the value to be initialized.
  //useState then in turn returns a variable which can be used in jsx and a function to be triggered on its change.
  //every component has its own state and is handled independently.

  return (
    <Card className="expense-item">
      <div className="expense-date">
        {/*here we can add basic javascript syntax*/}
        <div className="expense-date__day ">{day}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
