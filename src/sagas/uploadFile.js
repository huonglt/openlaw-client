import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { uploadFileSuccessAction, uploadFileFailedAction } from '../actions/index';

const END_POINT = 'http://localhost:8081/upload';

const uploadFile = (formData) => {
    return axios.post(END_POINT, formData).then(res => res.data);
};

/**
 * The saga to send http request to the server for parsing
 * If success, it will dispatch UPLOAD_FILE_SUCCESS_ACTION to the store
 * If failes, it will dispatch UPLOAD_FILE_FAILED_ACTION to the store
 * @param {Object} action The action dispatched 
 */
export function* uploadFileSaga(action) {
    try {
        const result = yield call(uploadFile, action.formData);
        yield put(uploadFileSuccessAction(result));
    } catch(err) {
        yield put(uploadFileFailedAction(err));
    }
}