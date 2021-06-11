import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
import { useState } from "react";
const Expenses = (props) => {
  const [currentvalue, changeCurrentvalue] = useState(2019);
  const selectedYear = (current) => {
    console.log("Expenses.js");
    changeCurrentvalue(current);
  };
  const filteredexpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === currentvalue;
  });
  let expensesconst = <p>No Contents found.</p>;
  if (filteredexpenses.length > 0) {
    expensesconst = filteredexpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        currentyear={currentvalue}
        onChangefilter={selectedYear}
      />
      <ExpensesChart expenses={filteredexpenses} />
      {/*Now we can render the following components using an array which saves up the lot of code  */}
      {/*filteredexpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))*/}
      {/*We will just point to that component */
        expensesconst
      }
      {/*
    {condition && return element to be returned in case the condition is met.}
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
      */}
    </Card>
  );
};

export default Expenses;
