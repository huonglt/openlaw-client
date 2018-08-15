import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_FAILED } from '../../actions/index';

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