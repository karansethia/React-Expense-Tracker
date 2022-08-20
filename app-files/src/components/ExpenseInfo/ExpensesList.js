import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

export default function ExpensesList(props){

      if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expense found, Sir</h2>
      }
      return <ul className="expenses-list">
        {props.items.map((expenseparam) => (
        <ExpenseItem
          key={expenseparam.id}
          title={expenseparam.title}
          amount={expenseparam.amount}
          date={expenseparam.date}
        />
      ))}
      </ul>
}
