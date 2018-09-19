import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { loadGetAPITest, loadPostAPITest } from './actions'
import { testApi } from '../../api/index'
import { store } from '../../index'
import { getInjectAsync } from '../../utils/getInjectAsync'
import reducer from './reducer'
import sagas from './sagas'
import { makeSelectPostData, makeSelectGetData } from './selectors'

getInjectAsync({ store, reducer, sagas, reducerName: 'serciveExample' })
class ServiceApiExample extends React.Component {
  render() {
    const { getReseponseData, postReseponseData, testPostApi, testGetApi } = this.props

    return (
      <div>
        <h5
          onClick={() => {
            testGetApi()
          }}
        >
          testApi - get
        </h5>
        {JSON.stringify(getReseponseData)}
        <br />
        <h5
          onClick={() => {
            testPostApi()
          }}
        >
          testApi - post
        </h5>
        {JSON.stringify(postReseponseData)}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  postReseponseData: makeSelectPostData(),
  getReseponseData: makeSelectGetData(),
})

const mapDispatchToProps = dispatch => ({
  testPostApi: () => dispatch(loadPostAPITest()),
  testGetApi: () => dispatch(loadGetAPITest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ServiceApiExample)
