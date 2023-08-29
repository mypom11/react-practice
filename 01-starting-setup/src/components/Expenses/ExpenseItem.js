import ExpensDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <Card className="expense-item">
      <ExpensDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
    </Card>
  )
}

export default ExpenseItem
