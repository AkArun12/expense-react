import React from 'react'
import './MyExpenseDate.css'

export default function MyExpenseDate(props) {

const month=props.date.toLocaleString('en-us',{month:'long'});
  const year=props.date.getFullYear();
  const day=props.date.toLocaleString('en-us',{day:'2-digit'});
  return (
    
    <div className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__day'>{day}</div>
    <div className="expense-date__year">{year}</div>
  </div>
  )
}
