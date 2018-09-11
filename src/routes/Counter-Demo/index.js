import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
  plusFirstThenMultiplyAction,
  plusFiveAction,
  subtractAction,
  plusFirstThenDivideByTenAction
} from "./actions"
import { getCounter } from "./selectors"
import Counter from "./component"

const mapStateToProps = createStructuredSelector({
  counter: getCounter
})

const mapDispatchToProps = dispatch => ({
  plusFirstThenMultiply: (addend, multiplier) =>
    dispatch(plusFirstThenMultiplyAction(addend, multiplier)),
  plusFive: () => dispatch(plusFiveAction()),
  subtract: subtrahend => dispatch(subtractAction(subtrahend)),
  plusFirstThenDivideByTen: addend =>
    dispatch(plusFirstThenDivideByTenAction(addend))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
