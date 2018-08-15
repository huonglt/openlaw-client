import { connect } from 'react-redux';
import App from '../components/App';
import { uploadFileAction } from '../actions/index';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        uploadFile: (formData) => dispatch(uploadFileAction(formData))
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;