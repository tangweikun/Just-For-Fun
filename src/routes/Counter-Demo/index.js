import { connect } from "react-redux"
import { onIncrement, onDecrement } from "./actions"
import Counter from "./component"

const mapStateToProps = state => ({ value: state.counter })

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(onIncrement()),
  onDecrement: () => dispatch(onDecrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
