import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {
  plusFirstThenMultiplyAction,
  plusFiveAction,
  subtractAction,
  plusFirstThenDivideByTenAction,
} from './actions'
import { getCounter } from './selectors'
import Counter from './component'
import { getInjectAsync } from '../../utils/getInjectAsync'
import reducer from './reducer'
import { store } from '../../index'
import sagas from './sagas'
getInjectAsync({ reducer, store, sagas, reducerName: 'counter' })

const mapStateToProps = createStructuredSelector({
  counter: getCounter,
})

const mapDispatchToProps = dispatch => ({
  plusFirstThenMultiply: (addend, multiplier) =>
    dispatch(plusFirstThenMultiplyAction(addend, multiplier)),
  plusFive: () => dispatch(plusFiveAction()),
  subtract: subtrahend => dispatch(subtractAction(subtrahend)),
  plusFirstThenDivideByTen: addend => dispatch(plusFirstThenDivideByTenAction(addend)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
