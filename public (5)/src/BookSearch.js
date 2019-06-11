import React from 'react';
import { Link } from 'react-router-dom';

export default class BookSearch extends React.Component {
    state = {
        isbn: ''
    };

    onIsbnChange(event) {
        this.setState({
            isbn: event.target.value
        });
    }

    render() {
        return (
            <>
                <h2 class="text-info">BUCH SUCHEN </h2>
                <form>
                    <label>
                        ISBN:
                        <input
                        class="form-control" 
                            type="text"
                            name="isbn"
                            onChange={e => this.onIsbnChange(e)}
                            value={this.state.isbn}
                        />
                    </label>
                    <Link class="btn btn-primary" to={`/book/${this.state.isbn}`}>Buchdetails anzeigen</Link>
                    

                </form>
            </>
        );
    }
}
