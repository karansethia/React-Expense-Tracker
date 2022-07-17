import './ExpenseItem.css'

export default function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>July 17 2022</div>
      <div  className='expense-item__description'>
      <h2>Charger</h2>
      <div className='expense-item__price'>613</div>
      </div>
    </div>
  );
}
