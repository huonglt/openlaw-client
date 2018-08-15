import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_FAILED } from '../../actions/index';

const reducers = (state, action) => {
    switch(action.type) {
        case UPLOAD_FILE_SUCCESS:
            return { ...state, parsedResult: action.parsedResult };
        case UPLOAD_FILE_FAILED:
            return { ...state, parsedResult: null };    
    }
    return state;
}

export default reducers;