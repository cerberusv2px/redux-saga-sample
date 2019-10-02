import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "./actions";
import TempApi from "../Api";

const api = new TempApi();

export function* watchFetchPosts() {
  yield takeLatest(actions.FETCH_POST, fetchPosts);
}

function* fetchPosts() {
  try {
    const data = yield call(api.fetchPost);
    yield put(actions.fetchPostSuccess(data));
  } catch (error) {
    yield put(actions.fetchPostError(error));
  }
}
