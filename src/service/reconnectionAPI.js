export class ReconnectionAPI {
  constructor(reconnectionRequest, time, tolerance) {
    this.tolerance = tolerance
    this.reconnectionRequest = reconnectionRequest
    this.time = time
    this.currentTolerance = time
  }

  updateApi() {
    const _that = this
    let responseCopy = {}
    return new Promise(resolve => {
      _that.timers = setInterval(() => {
        if (_that.currentTolerance <= _that.tolerance) {
          _that.currentTolerance += _that.time
          fetch(_that.request).then(response => {
            responseCopy = response
            try {
              if (response.status >= 200 && response.status < 300) {
                clearInterval(_that.timers)
                resolve(response)
                console.log(".....数据请求成功")
              } else {
                // 请求中
                //alert("网络出了点问题，正在尝试重新连接");
                console.error(
                  `${_that.currentTolerance}${_that.request}.....尝试再次请求中`
                )
              }
            } catch (e) {
              console.error(e)
            }
          })
        } else {
          clearInterval(_that.timers)
          let errorInfo = {
            status: 500
          }
          if (responseCopy.statusText) {
            errorInfo = {
              ...errorInfo,
              responseCopy,
              code: ""
            }
          }
          // processException(errorInfo);
        }
      }, _that.time)
    })
  }
}
