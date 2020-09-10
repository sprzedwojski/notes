import React from 'react'
import './Notes.css'
import NewNote from './NewNote'

class Notes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            notes: [],
        }
        const user = 'swsasx'
        const password = 'aszxqw1212'
        const authString = `${user}:${password}`
        const headers = new Headers()
        headers.set('Authorization', 'Basic ' + btoa(authString))
        this.headers = headers
    }

    componentDidMount() {
        console.log('Notes mounting...')
        this.fetchNotes()
    }

    fetchNotes() {
        fetch('http://localhost:8080/api/notes', {
            headers: this.headers
        })
            .then(response => response.json())
            .then(response => this.setState({
                notes: response._embedded.notes
            }))
    }

    createNote(title, body) {
        fetch('http://localhost:8080/api/notes', {
            method: 'POST',
            headers: {...this.headers, 'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                body: body,
                author: 'Szymon'
            })
        }).then(() => this.fetchNotes(), err => console.error(err))
    }

    deleteNote(note, e) {
        fetch(note._links.self.href, {
            headers: this.headers,
            method: 'DELETE'
        }).then(() => this.fetchNotes(), err => console.error(err));
    }

    render() {
        const { notes } = this.state;
        return (
            <div className="Notes">
                {notes.map(note => (
                    <div key={note.title} className="single-note">
                        <div className="note-title">{note.title}</div>
                        <div className="note-body">{note.body}</div>
                        <div className="note-author">{note.author}</div>
                        <button className="note-delete" onClick={(e) => this.deleteNote(note, e)}>Delete</button>
                    </div>
                ))}
                <NewNote createNote={(title, body) => this.createNote(title, body)}/>
            </div>
        )
    }
}

export default Notes