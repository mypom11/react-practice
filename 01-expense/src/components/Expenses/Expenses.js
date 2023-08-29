import ExpenseList from './ExpenseList'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'
import { useState } from 'react'

const Expensese = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selctedYear) => {
    setFilteredYear(selctedYear)
  }
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selcted={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  )
}

export default Expensese
