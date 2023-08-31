import MyNewExpense from "./components/Expenses/MyNewExpense";
import React, {useState} from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
  { 
    id:'e1',
    title:"Pizza",
    amount:10,
    date:new Date(2023,7,3)
  }
];






const App=()=> {

  const[expenses,setExpenses] =useState(DUMMY_EXPENSE);

  

  const addExpenseHandler=(expense)=>{

    const updatedExpense=[expense, ...expenses];

    setExpenses(updatedExpense)
  }

  return (
    <div className="App">
      <h2 className="heading2">My Top Expense Details:</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <MyNewExpense item={expenses} />
     
    </div>
  );
}

export default App;
