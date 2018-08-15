import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_FAILED } from '../../actions/index';

/**
 * The reducer of the store
 * Handle UPLOAD_FILE_SUCCESS and UPLOAD_FILE_FAILED actions dispatched by the uploadFile saga
 * When UPLOAD_FILE_SUCCESS action, it sets the parsedResult to the state, and reset the err to null
 * When UPLOAD_FILE_FAILED action, it sets the parsedResult to null and sets the err to a friendly message
 */
const reducers = (state, action) => {
    switch(action.type) {
        case UPLOAD_FILE_SUCCESS:
            return { ...state, parsedResult: action.parsedResult, err: null };
        case UPLOAD_FILE_FAILED:
            return { ...state, parsedResult: null, err: 'Sorry something wrong. Check your file is an ascii file or server is running' };    
    }
    return state;
}

export default reducers;