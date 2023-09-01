import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const isEmpty = (value) => value.trim().length === ''
const isFiveChars = (value) => value.trim().length === 5

const Checkout = (props) => {
  const [formInputsValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  })
  const nameInput = useRef('')
  const streetInput = useRef('')
  const postalCodeInput = useRef('')
  const cityInput = useRef('')

  const confirmHandler = (event) => {
    event.preventDefault()

    const enteredName = nameInput.current.value
    const enteredStreet = streetInput.current.value
    const enteredPostalCode = postalCodeInput.current.value
    const enteredCity = cityInput.current.value

    const enterNameIsValid = !isEmpty(enteredName)
    const entedStreetIsValid = !isEmpty(enteredStreet)
    const enterCityIsValid = !isEmpty(enteredCity)
    const enterPostalCodeIsValid = isFiveChars(enteredPostalCode)

    setFormInputValidity({
      name: entedStreetIsValid,
      street: entedStreetIsValid,
      city: enterCityIsValid,
      postalCode: enterPostalCodeIsValid,
    })

    const formIsValid =
      entedStreetIsValid &&
      enterNameIsValid &&
      enterCityIsValid &&
      enterPostalCodeIsValid

    if (!formIsValid) {
      return
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    })
  }
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInput} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInput} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInput} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postalCode!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInput} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  )
}

export default Checkout
