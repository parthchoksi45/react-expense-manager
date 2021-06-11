import { useState } from "react";
import "./ExpenseForm.css";
let count3=0;
const ExpenseForm = (props) => {
  //react schedules state updates,it does not do them instantly.
  //so it is important to check that the states are updated on correct time.
  //whenever a event handler is created , it always by default passes an event object to the function it calls.This object(named event here has info on various property change which can be viewed by doing console.log(event))
  //If there are multiple state and we create them separately, all are maintained independently by react.
  //An alternative approach is to use only one useState like
  /*const [userInput,changeInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    })
    Here we pass a key value pair as object to useState.

    const titleChangeHandler=(event)=>{
            changeInput((prevState)=>{Here prev state is passed by default to the changeInput method, so we update copy all previous state variables and update only the required one but we need to copy all since otherwise only one state variable will remain ultimately.

                
                    return({...prevState,enteredTitle:event.target.value});
            })
        }
    
    
    
    */
  const [enteredTitle, changeTitle] = useState("");
  const titleChangeHandler = (event) => {
    changeTitle(event.target.value);
    console.log(enteredTitle);
  };
  const [enteredAmount, changeAmount] = useState("");
  const amountChangeHandler = (event) => {
    changeAmount(event.target.value);
  };
  const [enteredDate, changeDate] = useState("");
  const dateChangeHandler = (event) => {
    changeDate(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault(); 
    count3+=1;
    console.log("submitHandler called times = ",count3);
      const data={
          title:enteredTitle,
          date:new Date(enteredDate),
          amount:enteredAmount,
      }
      props.onSave(data);
      changeTitle('');
      changeAmount('');
      changeDate('');
  }
  const canceleventHandler=()=>{
    props.onCancel();
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={canceleventHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
