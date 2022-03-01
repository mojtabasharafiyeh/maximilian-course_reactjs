import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {
  const saveHandler = (e) => {
    const data = { ...e }
    console.log('in new expense js')
    console.log(data)
    props.onsave2(data)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onsave={saveHandler}></ExpenseForm>
    </div>
  )
}
export default NewExpenses
