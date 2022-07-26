import './ExpenseForm.css'
import { useState } from 'react'
export default function ExpenseForm(){

    // ! use this method if you want to analyze state for every particular input seperately
    /* const [enteredTitle, setEnteredTitle] = useState('');
       const [enteredAmount, setEnteredAmount] = useState('');
       const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    */
   // ! Using a single state to handle all the user input
   // todo use this if one input depends on another
   const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
   });
   const titleChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredTitle : event.target.value
    })  }
   const amountChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredAmount : event.target.value
    })  }
   const dateChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredDate : event.target.value
    })  }

    return <form>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01'  onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2021-01-01'  onChange={dateChangeHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}