import React, { Component } from "react"
// import { testApi } from '../../api'

export default class Counter extends Component {
  // async componentDidMount() {
  //   const bar = await testApi({
  //     command: '600422',
  //     data: {},
  //   })
  // }

  render() {
    const {
      counter,
      plusFirstThenMultiply,
      plusFive,
      subtract,
      plusFirstThenDivideByTen
    } = this.props

    return (
      <div>
        <p>总次数: {counter}</p>
        <p>
          <button onClick={() => plusFirstThenMultiply(2, 3)}>
            plus 2 First Then Multiply 3
          </button>{" "}
        </p>
        <p>
          <button onClick={plusFive}>plus five</button>
        </p>
        <p>
          <button onClick={() => subtract(2)}>subtract 2</button>
        </p>
        <p>
          <button onClick={() => plusFirstThenDivideByTen(2)}>
            plus 2 First Then Divide By Ten
          </button>
        </p>
      </div>
    )
  }
}
