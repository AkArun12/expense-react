import "./MyNewExpense.css";
import MyExpense from "./MyExpense";

import React from "react";

export default function MyNewExpense(props) {
  return (
    <div className="expenses">
      {props.item.map(
        expense=>(
          <MyExpense 
          key={expense.id}

          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          
          
          />
        )
          

        
      )
      }

      
    </div>
  );
}
