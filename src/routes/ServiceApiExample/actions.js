export const ServiceApiExampleActionType = {
  LOAD_GET_API: "ServiceApiExampleActionType/LOAD_GET_API",
  LOAD_POST_API: "ServiceApiExampleActionType/LOAD_POST_API",
  GET_API_SUCESS: "ServiceApiExampleActionType/GET_API_SUCESS",
  POST_API_SUCESS: "ServiceApiExampleActionType/POST_API_SUCESS",
  GET_API_ERROR: "ServiceApiExampleActionType/GET_API_ERROR",
  POST_API_ERROR: "ServiceApiExampleActionType/POST_API_ERROR"
}

export const loadGetAPITest = params => ({
  type: ServiceApiExampleActionType.LOAD_GET_API,
  params
})

export const getAPITestSucess = data => ({
  type: ServiceApiExampleActionType.GET_API_SUCESS,
  data
})

export const getAPITestError = error => ({
  type: ServiceApiExampleActionType.GET_API_ERROR,
  error
})

export const loadPostAPITest = params => ({
  type: ServiceApiExampleActionType.LOAD_POST_API,
  params
})

export const postAPITestSucess = data => ({
  type: ServiceApiExampleActionType.POST_API_SUCESS,
  data
})

export const postAPITestError = error => ({
  type: ServiceApiExampleActionType.POST_API_ERROR,
  error
})
