import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
    // setEnteredTitle(event.target.value)
  }
  const ammountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
    // setEnteredAmmount(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
    // setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: userInput.enteredTitle,
      amount: Number(userInput.enteredAmount),
      date: new Date(userInput.enteredDate),
    }
    props.onSaveExpenseData(expenseData)

    setUserInput({ enteredTitle: '', enteredAmount: '', enteredDate: '' })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={ammountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
