import { createSelector } from 'reselect'
import get from 'lodash/get'
export const serverApiExample = state => get(state, 'serciveExample', {})

const makeSelectGetData = () => createSelector(serverApiExample, data => get(data, 'getDatas'))

const makeSelectPostData = () => createSelector(serverApiExample, data => get(data, 'postDatas'))

export { makeSelectGetData, makeSelectPostData }
