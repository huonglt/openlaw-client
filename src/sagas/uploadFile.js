import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { uploadFileSuccessAction, uploadFileFailedAction } from '../actions/index';

const END_POINT = 'http://localhost:8081/upload';

const uploadFile = (formData) => {
    return axios.post(END_POINT, formData).then(res => res.data);
};

export function* uploadFileSaga(action) {
    try {
        const result = yield call(uploadFile, action.formData);
        yield put(uploadFileSuccessAction(result));
    } catch(err) {
        yield put(uploadFileFailedAction(err));
    }
}