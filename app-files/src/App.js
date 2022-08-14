import { useState } from "react";
import Expenses from "./components/ExpenseInfo/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";


const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
const addExpenseHandler = expense => {
  setExpenses(prevExpenses => {
    return [expense,...prevExpenses]
  });
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
/*
  * Alternative of return statement (was used in previous React versions)
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Lets Get Started"),
    React.createElement(Expenses, { item: expenses })
  );
*/
/*
* ...prevstate in React
prevState is a name that you have given to the argument passed to setState callback function. 
What it holds is the value of state before the setState was triggered by React; 
Since setState does batching, its sometimes important to know what the 
previous state was when you want to update the new state based on the previous state value.
So if multiple setState calls are updating the same state, batching setState calls may lead 
to incorrect state being set. 
*/
  }
export default App;
