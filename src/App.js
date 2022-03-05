import Expenses from './component/Expenses'
import NewExpenses from './component/NewExpenses/NewExpenses'
import { useState } from 'react'
const initial = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]
const App = () => {
  const [expenses, setexpenses] = useState(initial)

  const addExpenseHandler = (addExpense) => {
    setexpenses([addExpense, ...initial])
    console.log(expenses)
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpenses onaddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
