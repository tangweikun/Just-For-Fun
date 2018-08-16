import React, { Component } from "react"
import { testApi } from "../../api"

export default class Counter extends Component {
  async componentDidMount() {
    const bar = await testApi({
      command: "600422",
      data: {}
    })
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
