import {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//own component must start with a uppercase character
//built-in component start with lower case character.
//props(properties)=attributes in javascript
const Dummy_data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
let count1=0;
function App() {
  const [expenses1,setExpenses]=useState(Dummy_data);
  console.log("App");
  const addItem = (expense) => {
    count1+=1;
    console.log("addItem called times = ",count1);
    setExpenses((prevExpenses) => {
      return ([expense, ...prevExpenses])
    });
  }
  return (
    <div>
      <NewExpense onCreateitem={addItem} />
      <Expenses expenses={expenses1}/>
    </div>
  );
}

export default App;
