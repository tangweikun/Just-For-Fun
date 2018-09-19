import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { onTodoIncrement, onTodoDecrement } from './actions'
import Counter from './component'
import { valueSelector } from './selectors'
import { getInjectAsync } from '../../utils/getInjectAsync'
import reducer from './reducer'
import { store } from '../../index'
import sagas from './sagas'
getInjectAsync({ reducer, store, sagas, reducerName: 'todoCounter' })

const mapStateToProps = createStructuredSelector({ value: valueSelector })

const mapDispatchToProps = dispatch => ({
  onTodoIncrement: () => dispatch(onTodoIncrement()),
  onTodoDecrement: () => dispatch(onTodoDecrement()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
