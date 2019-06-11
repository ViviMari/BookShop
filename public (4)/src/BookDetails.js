import React from 'react';

export default class BookDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            book: {}, // objekt{} bei class []
            loading: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:4730/books/'+this.props.match.params.isbn)
            .then(data => data.json())
            
            .then(data => this.setState({ book: data, loading: false })); //console.log(data)) um es in der console anzuzeigen
    }

    render() {
        return (<div class="list-group">
            <h2 class="text-info">BUCH INFORMATIONEN ZU {this.state.book.isbn} </h2>
            <p class ="list-group-item">
            <b>Author:</b> {this.state.book.author} <br></br>
            <b>Subtitle:</b> {this.state.book.subtitle} <br></br>
            <b>Title:</b> {this.state.book.title} <br></br>
            </p>
        </div>
              
        )
    }
}
