import React from 'react';


export default class BookDetails extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            book: [],
            loading: true
        }
    }
    
    render() {
        return (
            <section>
                <div class="row">
                    <h2 class="col-12">{this.state.book.title} - {this.state.book.subtitle}</h2>
                </div>
                <div class="row">
                    
                    <div class="col-lg-6" className="Infobox">
                        <p>
                            <strong>Autor:</strong> {this.state.book.author}
                        </p>
                        
                        <p>
                            <strong>ISBN:</strong> {this.state.book.isbn}
                        </p>
                        <p>
                            <strong>Subtitle:</strong> {this.state.book.subtitle}
                        </p>
                    </div>
                </div>
              
                <div class="row">
                    <button class="col-2 offset-1" onClick={() => this.buchLoeschen()}>Buch löschen</button>
                    <button class="col-2 offset-4" onClick={() => this.buchAktualisieren()}>Buch aktualisieren</button>
                </div>
            </section>
        )
    }

}