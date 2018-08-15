import React from 'react';

/**
 * This component display a table with total word count and the count of each word occurence
 */
export default class FileUploaderResult extends React.Component {
    constructor(props) {
        super(props);
        this.wordOccurenceBlock = this.wordOccurenceBlock.bind(this);
    }

    wordOccurenceBlock(wordOccurences) {
        return Object.keys(wordOccurences).map((word, index) => {
            return (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>{word}
                    <span className="badge badge-primary badge-pill">{wordOccurences[word]}</span>
                </li>
            );
        });
    }

    render() {
        const { totalWordCount, wordOccurences } = this.props;
        return (
            <div className="container mt-4">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-primary">
                    Total Word Count
                    <span className="badge badge-primary badge-pill">{totalWordCount}</span>
                </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-primary">Word Occurrences</li>
                    {this.wordOccurenceBlock(wordOccurences)}
                </ul>
            </div>
        );
    }
}