import { takeEvery } from 'redux-saga/effects';
import { UPLOAD_FILE } from '../actions/index';
import { uploadFileSaga } from './uploadFile';

/**
 * The root saga of the app
 */
export function* rootSaga() {
  yield takeEvery(UPLOAD_FILE, uploadFileSaga);
}