import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { onIncrement, onDecrement } from "./actions"
import { valueSelector } from "./selectors"
import Counter from "./component"

const mapStateToProps = createStructuredSelector({
  value: valueSelector
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(onIncrement()),
  onDecrement: () => dispatch(onDecrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
