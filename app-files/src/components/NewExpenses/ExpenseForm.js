import './ExpenseForm.css'
import { useState } from 'react'
export default function ExpenseForm(props){

    // ! use this method if you want to analyze state for every particular input seperately
    const [enteredTitle, setEnteredTitle] = useState('');
       const [enteredAmount, setEnteredAmount] = useState('');
       const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
    // ! Using a single state to handle all the user input (CODE HIDDEN)
   /*

   * Object Updation Aproach
   ? Function Updation Aproach (Use this if your current state depends on previous)    
   const [userInput, setUserInput] = useState({
        enteredTitle : '',
        enteredAmount : '',
        enteredDate : ''
   });
   const titleChangeHandler = (event) => {
   * setUserInput({ ...userInput, enteredTitle : event.target.value }) 
   ? setUserInput((prevState) => {
   ? return { ...prevState,enteredTitle: event.target.value}
   })
 }
   const amountChangeHandler = (event) => {
   * setUserInput({ ...userInput, enteredAmount : event.target.value }) 
   ? setUserInput((prevState) => {
   ? return { ...prevState,enteredAmount: event.target.value}
   })
 }
   const dateChangeHandler = (event) => {
  * setUserInput({ ...userInput, enteredDate : event.target.value }) 
  ? setUserInput((prevState) => {
   ? return { ...prevState,enteredDate: event.target.value}
   })
 }
 */

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2021-01-01' value={enteredDate}  onChange={dateChangeHandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}