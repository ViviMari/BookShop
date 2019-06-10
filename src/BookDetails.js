import React from 'react';

export default class BookDetails extends React.Component {

    
    render() {
        return (
            <>
                <h1>Buchdetailseite - ISBN: {this.props.match.params.isbn}</h1>
                <h1>Buchdetailseite - Title: {this.props.match.params.title}</h1>
            </>
        );
    }
}
