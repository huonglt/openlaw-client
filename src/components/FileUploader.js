import React from 'react';

/**
 * This component allows user to select a file to upload
 * When click Upload button, it will check for a file being selected and its size is <= 10MB 
 * If validation fails, it will display an error message, and not send the data to the server
 * If valdation success, it will send data to the server for parsing
 */
export default class FileUploader extends React.Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.upload = this.upload.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {};
    }
    upload() {
        const fileSelected = this.fileInput.current.files[0];
        
        if(fileSelected) {
            if(fileSelected.size > 10 * 1024 * 1024) {
                this.setState({ msg: 'Please select a file < 10MB' });    
            } else {
                const formData = new FormData();
                formData.append('file', fileSelected);
                this.props.upload(formData);
                this.setState({ msg: ''});
            }
            
        } else {
            this.setState({ msg: 'Please select a file' });
        }
    }
    changeHandler(e) {
        if(e.target.files[0]) {
            this.setState({ msg: ''});
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row m-3">
                    <div><input type="file" ref={this.fileInput} onChange={this.changeHandler}/></div>
                    <div><button type="button" className="btn btn-primary" onClick={this.upload}>Upload</button></div>
                </div>
                {this.state.msg && 
                    <div className="row m-3">
                        <div>{this.state.msg}</div>
                    </div>
                }
            </div>
        );
    }
}