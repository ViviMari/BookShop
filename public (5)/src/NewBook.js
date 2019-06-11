import React from 'react';


export default class NewBook extends React.Component {
    state = {
        title: '',
        subtitle: '',
        isbn: '',
        author: '',

    };

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }
    onSubtitleChange(event) {
        this.setState({ subtitle: event.target.value });
    }
    onIsbnChange(event) {
        this.setState({ isbn: event.target.value });
    }
    onAuthorChange(event) {
        this.setState({ author: event.target.value });
    }


    sendForm() {
        fetch('http://localhost:4730/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                subtitle: this.state.subtitle,
                isbn: this.state.isbn,
                author: this.state.author,


            })
        })
            .then(
                response => alert(response.status),
                error => console.log(error)
            );
    }

    render() {
        return (
            <form>
                <h2 class="text-info">BUCH HINZUFÜGEN </h2>
                <div class="form-group">
                    <label>
                        Title:
                        <input class="form-control" type="text" name="title" 
                        onChange={e => this.onTitleChange(e)} 
                        value={this.state.title} />
                    </label>
                </div>

                <div class="form-group">
                    <label>
                        Subtitle:
                        <input class="form-control" type="text" name="subtitle" 
                        onChange={e => this.onSubtitleChange(e)} 
                        value={this.state.subtitle} />
                    </label>
                </div>

                <div class="form-group">
                    <label>
                        Author:
                        <input class="form-control" type="text" name="author" 
                        onChange={e => this.onAuthorChange(e)} 
                        value={this.state.author} />

                    </label>
                </div>
                
                <div class="form-group">
                    <label>
                        ISBN:
                        <input class="form-control" type="text" name="isbn" 
                        onChange={e => this.onIsbnChange(e)} 
                        value={this.state.isbn} />
                    </label>
                </div>

                <button class="btn btn-primary" onClick={() => this.sendForm()}>Submit</button>

            </form>
        );
    }
}
