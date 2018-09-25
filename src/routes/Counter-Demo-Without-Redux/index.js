import React, { Component } from 'react'

export default class Counter extends Component {
  state = { counter: 0 }

  plusFirstThenMultiply = (addend = 0, multiplier = 1) => {
    this.setState(preState => ({
      counter: (preState.counter + addend) * multiplier,
    }))
  }

  plusFive = () => {
    this.setState(preState => ({
      counter: preState.counter + 5,
    }))
  }

  subtract = () => {
    this.setState(preState => ({
      counter: preState.counter - 2,
    }))
  }

  plusFirstThenDivideByTen = (addend = 0) => {
    const divisor = 10
    this.setState(preState => ({
      counter: (preState.counter + addend) / divisor,
    }))
  }

  render() {
    const { plusFirstThenMultiply, plusFive, subtract, plusFirstThenDivideByTen } = this

    const { counter } = this.state

    return (
      <div style={{ border: '2px solid green', margin: '30px' }}>
        <p>WITHOUT_REDUX--->总次数: {counter}</p>
        <p>
          <button onClick={() => plusFirstThenMultiply(2, 3)}>plus 2 First Then Multiply 3</button>{' '}
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
