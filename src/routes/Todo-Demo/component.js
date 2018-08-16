import React, { Component } from "react"

export default class Counter extends Component {
  render() {
    const {
      value,
      onTodoIncrement,
      onTodoIncrementAsync,
      onTodoDecrement,
      onTodoIncrementIfOdd
    } = this.props

    return (
      <p>
        Clicked: {value} times <button onClick={onTodoIncrement}>+</button>{" "}
        <button onClick={onTodoDecrement}>-</button>{" "}
        <button onClick={onTodoIncrementIfOdd}>Increment if odd</button>{" "}
        <button onClick={onTodoIncrementAsync}>Increment async</button>
      </p>
    )
  }
}
