import { ServiceApiExampleActionType } from "./actions"

const initState = {
  postDatas: {
    loading: false,
    data: {},
    error: ""
  },
  getDatas: {
    loading: false,
    data: {},
    error: ""
  }
}
function serviceExample(state = initState, action) {
  switch (action.type) {
    case ServiceApiExampleActionType.LOAD_POST_API:
      return {
        ...state,
        postDatas: {
          loading: true,
          data: {},
          error: ""
        }
      }
    case ServiceApiExampleActionType.POST_API_SUCESS:
      return {
        ...state,
        postDatas: {
          loading: false,
          data: action.data,
          error: ""
        }
      }
    case ServiceApiExampleActionType.POST_API_ERROR:
      return {
        ...state,
        postDatas: {
          loading: false,
          data: {},
          error: action.error
        }
      }

    case ServiceApiExampleActionType.LOAD_GET_API:
      return {
        ...state,
        getDatas: {
          loading: true,
          data: {},
          error: ""
        }
      }
    case ServiceApiExampleActionType.GET_API_SUCESS:
      return {
        ...state,
        getDatas: {
          loading: false,
          data: action.data,
          error: ""
        }
      }
    case ServiceApiExampleActionType.GET_API_ERROR:
      return {
        ...state,
        getDatas: {
          loading: false,
          data: {},
          error: action.error
        }
      }

    default:
      return state
  }
}

export default serviceExample
