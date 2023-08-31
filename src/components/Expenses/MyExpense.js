import "./MyExpense.css";
import React  from "react";
import MyExpenseDate from "./MyExpenseDate";



const MyExpense=(props)=> {

 
  return (
    <div className="expense-item">
      <MyExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
 

      
 
    </div>
  );
}

export default MyExpense;
