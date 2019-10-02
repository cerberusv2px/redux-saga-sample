import {all, fork} from 'redux-saga/effects';

import {watchFetchPosts} from '../screens/saga';

export function* rootSaga() {
  yield all([
    fork(watchFetchPosts),
  ]);
}
