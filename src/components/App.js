import React, { Component } from 'react';
import FileUploader from './FileUploader';
import FileUploaderResult from './FileUploaderResult';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(`this.props = ${JSON.stringify(this.props)}`);
        const parsedResult = this.props.parsedResult;
        
        return (
            <div className="container">
                <div className="row m-3"><h3>Open Law - File Uploader</h3></div>
                <div className="row"><FileUploader upload={this.props.uploadFile}/></div>
                {parsedResult && parsedResult.totalWordCount && <div className="row"><FileUploaderResult {...this.props.parsedResult}/></div>}
                {parsedResult && parsedResult.errMsg && <div>{parsedResult.errMsg}</div>}
            </div>
        );
    }
}