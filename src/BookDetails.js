import React from 'react';

export default class BookDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}, // objekt{} bei class []
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:4730/books/'+this.props.match.params.isbn)
            .then(data => data.json())
            .then(data => this.setState({book: data, loading: false})); //console.log(data)) um es in der console anzuzeigen
    }

    buchLoeschen() {
        fetch('http://localhost:4730/books/'+this.props.match.params.isbn,{method:'DELETE'})
        .then(data => data.json())
        .then(data => this.setState({book: data}));
        this.props.history.push('/books')
    }

    render() {
        return (<div className="list-group">
            <h2 className="text-info">BUCH INFORMATIONEN ZU "{this.state.book.title}" </h2>
            <p className ="list-group-item">
            <b>Author:</b> {this.state.book.author} <br></br>
            <b>Subtitle:</b> {this.state.book.subtitle} <br></br>
            <b>Title:</b> {this.state.book.title} <br></br>
            <b>ISBN:</b> {this.state.book.isbn} <br></br>
            </p>
            <a className="btn btn-primary" href={`/changebook/${this.state.book.isbn}`} role="button">Bearbeiten</a>
            <button className="btn btn-primary" onClick={() => this.buchLoeschen()}>Löschen</button>
        </div>
              
        )
    }
}
