import ExpenseForm from "./ExpenseForm";
import {useState} from "react";
import "./NewExpense.css";
let count2=0;
const NewExpense = (props) => {
const [isEditing,setEditing]=useState(true);
const changeeditstate=()=>{
  setEditing(true);
}
const oneditstate=()=>{
  setEditing(false);
}
const addNewItem=(newitemdata)=>{
  count2+=1;
    console.log("addNewItem called times = ",count2);
  const expensedata={
    ...newitemdata,
    id:Math.random().toString(),
  }
  props.onCreateitem(expensedata);
}

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={changeeditstate}>Add new expense</button>}
      {isEditing && <ExpenseForm onCancel={oneditstate} onSave={addNewItem}/>}
    </div>
  );
};

export default NewExpense;
