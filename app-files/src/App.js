import Expenses from "./components/ExpenseInfo/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
const addExpenseHandler = expense => {
  console.log(expense);
  console.log("inside app");
}

  const expenses = [
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
  }
export default App;
