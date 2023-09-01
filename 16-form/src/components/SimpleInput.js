import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameIsError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailIsError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'))

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    if (!enteredNameIsValid) {
      return
    }
    console.log(enteredName)
    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameIsError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailIsError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameIsError && <p className="error-text">Name Must be Empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailIsError && <p className="error-text">Email Must be Empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
