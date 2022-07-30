import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UIComp/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react'

export default function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear);
  }

   return (
       <div>
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
       <Card className="expenses">
        {props.items.map(expenseparam => (
          <ExpenseItem title = {expenseparam.title} amount = {expenseparam.amount} date={expenseparam.date} />
        ))}
       </Card>
       </div>
   ); 
}
 /* 
 ! Hard Coded data down below is not useful so we use Array.map method
 <ExpenseItem
 title={props.items[0].title}
 amount={props.items[0].amount}
 date={props.items[0].date}
></ExpenseItem>
<ExpenseItem
 title={props.items[1].title}
 amount={props.items[1].amount}
 date={props.items[1].date}
></ExpenseItem> */