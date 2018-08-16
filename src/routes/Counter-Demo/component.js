import React, { Component } from "react"

export default class Counter extends Component {
  async componentDidMount() {
    const foo = await fetch("/api/command/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:
        "message=" +
        encodeURIComponent(JSON.stringify({ command: "600422", data: {} }))
    }).then(response => response.json())
  }

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
