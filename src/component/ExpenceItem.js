import './ExpenseItem.css'
function ExpenceItem() {
  const expenseDate = new Date(2022, 2, 21)
  const expenseTitle = 'this is title!'
  const expenseAmount = '300'
  return (
    <div className='expense-item'>
      <div>{expenseDate.toLocaleString()}</div>
      <div className='expense-item__description'>
        <h2> {expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}
export default ExpenceItem
