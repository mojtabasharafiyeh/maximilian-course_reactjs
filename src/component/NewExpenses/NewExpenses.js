import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (expense) => {
    const data = { ...expense, id: Math.random().toString() }
    props.onaddExpense(data)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onsaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}
export default NewExpenses
