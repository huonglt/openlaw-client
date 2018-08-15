import { takeEvery } from 'redux-saga/effects';
import { UPLOAD_FILE } from '../actions/index';
import { uploadFileSaga } from './uploadFile';

export function* rootSaga() {
  yield takeEvery(UPLOAD_FILE, uploadFileSaga);
}