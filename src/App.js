import Expenses from './component/Expenses'
import NewExpenses from './component/NewExpenses/NewExpenses'
function App() {
  const expenses = [
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
  const save2Handler = (e) => {
    const data = { ...e }
    console.log('in app')
    console.log(data)
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpenses onsave2={save2Handler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
