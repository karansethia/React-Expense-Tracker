//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UIComp/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter(expenseobj => {
    return expenseobj.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
       <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
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
></ExpenseItem> 
*/
/*
! One way of adding conditional content in React
{filteredExpenses.length === 0 && <p>No Expense found, Sir</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((expenseparam) => (
          <ExpenseItem
            key={expenseparam.id}
            title={expenseparam.title}
            amount={expenseparam.amount}
            date={expenseparam.date}
          />
        ))}
*/
