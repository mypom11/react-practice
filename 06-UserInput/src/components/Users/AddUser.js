import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'

import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'please enter a valid name and age (non-empty values).',
      })
      return
    } else if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age(>0).',
      })
      return
    }
    props.onAddUser(enteredUserName, enteredAge)
    setEnteredUserName('')
    setEnteredAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value)
  }
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
