import { connect } from "react-redux"
import { onTodoIncrement, onTodoDecrement } from "./actions"
import Counter from "./component"

const mapStateToProps = state => ({ value: state.todoCounter })

const mapDispatchToProps = dispatch => ({
  onTodoIncrement: () => dispatch(onTodoIncrement()),
  onTodoDecrement: () => dispatch(onTodoDecrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
