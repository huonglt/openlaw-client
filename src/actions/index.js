export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_FAILED = 'UPLOAD_FILE_FAILED';

export const uploadFileAction = (formData) => ({ type: UPLOAD_FILE, formData });
export const uploadFileSuccessAction = (parsedResult) => ({ type: UPLOAD_FILE_SUCCESS, parsedResult });
export const uploadFileFailedAction = (err) => ({ type: UPLOAD_FILE_FAILED, err });