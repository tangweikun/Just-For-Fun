import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { onTodoIncrement, onTodoDecrement } from "./actions"
import Counter from "./component"
import { valueSelector } from "./selectors"

const mapStateToProps = createStructuredSelector({ value: valueSelector })

const mapDispatchToProps = dispatch => ({
  onTodoIncrement: () => dispatch(onTodoIncrement()),
  onTodoDecrement: () => dispatch(onTodoDecrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
