import 'babel-polyfill'
import { all, call, put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import * as types from 'constants/actionTypes'

function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: types.INCREMENT })
}

function* watchIncrementAsync() {
  yield takeEvery(types.INCREMENT_ASYNC, incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
  ])
}
