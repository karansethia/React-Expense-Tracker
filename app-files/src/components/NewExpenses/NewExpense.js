import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"

export default function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
       const expenseData = { ...enteredExpenseData,  // copying previous object key value pairs
        id: Math.random().toString()
       }
       props.onAddExpense(expenseData)
    };

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
        </div>
    )
}
// Here onSaveExpenseData is custom property for recieving expensedata object from child (ExpenseForm)