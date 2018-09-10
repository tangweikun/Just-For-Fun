import React from "react"
import { connect } from "react-redux"
import { loadGetAPITest, loadPostAPITest } from "./actions"
import { testApi } from "../../api/index"

class ServiceApiExample extends React.Component {
  render() {
    const {
      getReseponseData,
      postReseponseData,
      testPostApi,
      testGetApi
    } = this.props

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

const mapStateToProps = state => ({
  postReseponseData: state.serviceExample.postDatas,
  getReseponseData: state.serviceExample.getDatas
})

const mapDispatchToProps = dispatch => ({
  testPostApi: () => dispatch(loadPostAPITest()),
  testGetApi: () => dispatch(loadGetAPITest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceApiExample)
