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
           <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
       </Card>
       </div>
   ); 
}
