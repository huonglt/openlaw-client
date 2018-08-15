import { connect } from 'react-redux';
import App from '../components/App';
import { uploadFileAction } from '../actions/index';

/**
 * The AppContainer wire up the App component to the redux store
 * Allow the App to dispatch uploadFile action to the store
 */
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFile: (formData) => dispatch(uploadFileAction(formData))
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;