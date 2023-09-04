import { Component } from 'react'
import classes from './Counter.module.css'
import { useSelector, useDispatch, connect } from 'react-redux'

import { counterActions } from '../store/counter'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment(1))
  }
  const increment5Handler = () => {
    dispatch(counterActions.increment(10))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement(1))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increment5Handler}>increment by 10</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }
//   toggleCounterHandle() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
