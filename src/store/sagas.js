import { put, takeEvery } from 'redux-saga/effects';
// import { call, put, takeLatest } from 'redux-saga/effects';
// import {GET_INIT_LIST_ACTION} from './actionTypes';
import axios from 'axios';
import {getInitList} from './actionCreators';

function* getInitListAction () {
  let data = yield axios.get('/index/recommend.json');
  let list = data.data.list.map(i => i.title);
  let action = getInitList(list);
  yield put(action);
}

function* mySaga() {
  console.log('mySage');
  yield takeEvery('WILL_GET_INIT_LIST', getInitListAction);
}

export default mySaga;