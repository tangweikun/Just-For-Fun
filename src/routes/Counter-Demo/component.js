import React, { Component } from "react"

export default class Counter extends Component {
  render() {
    const {
      value,
      onIncrement,
      onIncrementAsync,
      onDecrement,
      onIncrementIfOdd
    } = this.props

    return (
      <p>
        Clicked: {value} times <button onClick={onIncrement}>+</button>{" "}
        <button onClick={onDecrement}>-</button>{" "}
        <button onClick={onIncrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={onIncrementAsync}>Increment async</button>
      </p>
    )
  }
}
