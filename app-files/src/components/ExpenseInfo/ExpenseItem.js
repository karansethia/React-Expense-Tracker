import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UIComp/Card';

export default function ExpenseItem(props) {

const [title, setTitle] = useState(props.title); // using array destructuring to take updated value and assigning function

const clickHandler = () => {
  setTitle('Updated!');
  console.log("Hello");
  
}

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div  className='expense-item__description'>
      <h2>{title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
