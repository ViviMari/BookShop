import React from 'react';

export default class Books extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:4730/books')
            .then(data => data.json())
            .then(data => this.setState({ books: data, loading: false }));
    }

    render() {
        
        return (<div class="list-group">
            <h2 class="text-info">BUCH AUSWAHL </h2>
            {this.state.loading ? 'LOADING...' : ''}                   
            {this.state.books.map(b => <a href={`/book/${b.isbn}`} class="list-group-item list-group-item-action">
                                        Titel: {b.title} <br></br> ISBN: {b.isbn}  </a>)}
        </div>
        )
    }
}