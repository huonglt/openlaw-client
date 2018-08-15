import React, { Component } from 'react';
import FileUploader from './FileUploader';
import FileUploaderResult from './FileUploaderResult';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { parsedResult, err } = this.props;
        
        return (
            <div className="container">
                <div className="row m-3"><h3>Open Law - ASCII File Parsing</h3></div>
                <div className="row m-3"><h6>Upload your ASCII file for parsing - No larger than 10MB</h6></div>
                <div className="row"><FileUploader upload={this.props.uploadFile}/></div>
                {parsedResult && parsedResult.totalWordCount && <div className="row"><FileUploaderResult {...this.props.parsedResult}/></div>}
                {parsedResult && parsedResult.errMsg && <div>{parsedResult.errMsg}</div>}
                {err && <div>{err}</div>}
            </div>
        );
    }
}