import { requestFetch } from './request'
import { serializeQuery } from '../utils/commonFunction'
import { isObject, isEmpty, get as _get } from 'lodash'
import { ENVIRONMENT_MAP } from './apiProtocol'
const appEncironment = process.env.REACT_APP_ENVIRONMENT

const REQUEST_PATH = _get(ENVIRONMENT_MAP, `${appEncironment}.REQUEST_PATH`, '/command/execute')
const PROXY_PATH = _get(ENVIRONMENT_MAP, `${appEncironment}.PROXY_PATH`, '/dev/api')

/**
 *
 *method: 请求使用的方法，如 GET、POST。
 *headers: 请求的头信息，形式为 Headers 的对象或包含 ByteString 值的对象字面量。
 *body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
 *mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
 *credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项， 从 Chrome 50 开始， 这个属性也可以接受 FederatedCredential 实例或是一个 PasswordCredential 实例。
 *cache:  请求的 cache 模式: default 、 no-store 、 reload 、 no-cache 、 force-cache 或者 only-if-cached 。
 *redirect: 可用的 redirect 模式: follow (自动重定向), error (如果产生重定向将自动终止并且抛出一个错误), 或者 manual (手动处理重定向). 在Chrome中，Chrome 47之前的默认值是 follow，从 Chrome 47开始是 manual。
 *referrer: 一个 USVString 可以是 no-referrer、client或一个 URL。默认是 client。
 *referrerPolicy: Specifies the value of the referer HTTP header. May be one of no-referrer、 no-referrer-when-downgrade、 origin、 origin-when-cross-origin、 unsafe-url 。
 *integrity: 包括请求的  subresource integrity 值 （ 例如： sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=）。
 */
const creactFetchOptions = options => {
  const initOptions = isObject(options) && !isEmpty(options) ? options : {}
  const defaultOptions = {
    mode: 'no-cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, *omit
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    method: 'POST', // GET, POST, PUT, DELETE, etc.
  }
  return {
    ...defaultOptions,
    ...initOptions,
  }
}

/**
 *
 * @param {*} param0
 * @protocol 请求协议号
 * @requestPath 项目请求的 url
 * @proxyPath 项目代理的url
 * @requestOptions fetch config配置项
 * @data 请求的data
 * @page 分页请求的参数
 * @clientInfo clientinfo请求参数
 */

export const post = ({
  protocol,
  requestPath = REQUEST_PATH,
  proxyPath = PROXY_PATH,
  requestOptions,
  data = {},
  page = '',
  clientInfo = '',
  contentType = 'application/x-www-form-urlencoded',
}) => {
  let requestinitOptions = {}
  if (isObject(requestOptions) && !isEmpty(requestOptions)) {
    requestinitOptions = { ...requestinitOptions, ...requestOptions }
  }
  const body = {
    command: protocol,
    data,
  }
  let bodyContent

  if (page) body.page = page
  if (clientInfo) body.clientInfo = clientInfo
  if (contentType === 'application/json') {
    bodyContent = `message=${encodeURIComponent(JSON.stringify(body))}`
  } else if (contentType === 'application/x-www-form-urlencoded') {
    bodyContent = `message=${encodeURIComponent(JSON.stringify(body))}`
    //bodyContent = serializeQuery(body);
  }

  requestinitOptions = {
    ...requestinitOptions,
    body: bodyContent,
    method: 'POST',
    headers: {
      'Content-Type': contentType,
    },
  }
  return requestFetch(
    new Request(`${proxyPath}${requestPath}`, creactFetchOptions(requestinitOptions)),
  )
}

/**
 *
 * @param {*} param0
 * @requestPath 项目请求的 url
 * @proxyPath 项目代理的url
 * @requestOptions fetch config配置项
 * @data 请求的data

 */

export const get = ({
  requestPath = REQUEST_PATH,
  proxyPath = PROXY_PATH,
  requestOptions,
  data,
  contentType = 'application/x-www-form-urlencoded',
}) => {
  let requestinitOptions = { headers: { contentType } }
  if (isObject(requestOptions) && !isEmpty(requestOptions)) {
    requestinitOptions = { ...requestinitOptions, ...requestOptions }
  }
  const urlParams = data ? `?${serializeQuery(data)}` : ''
  requestinitOptions = {
    ...requestinitOptions,
    method: 'GET',
  }
  return requestFetch(
    new Request(`${proxyPath}${requestPath}${urlParams}`, creactFetchOptions(requestinitOptions)),
  )
}
