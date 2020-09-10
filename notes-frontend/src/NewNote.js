import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }

        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleChangeBody = this.handleChangeBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeTitle(event) {
        this.setState({title: event.target.value})
    }

    handleChangeBody(event) {
        this.setState({body: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.createNote()
    }

    createNote() {
        this.props.createNote(this.state.title, this.state.body)
        this.setState({
            title: '',
            body: ''
        })
    }

    render() {
        return (
            <div className="single-note">
                <form onSubmit={this.handleSubmit} className="new-note">
                    <TextField id="standard-basic" placeholder="Title" value={this.state.title}
                               onChange={this.handleChangeTitle} />
                    <TextField
                        id="outlined-multiline-flexible"
                        placeholder="Your note"
                        multiline
                        rows={5}
                        value={this.state.body}
                        onChange={this.handleChangeBody}
                    />
                    <Button type="submit" variant="outlined" style={{marginTop: '1rem'}}>Save</Button>
                </form>
            </div>
        )
    }
}

export default NewNote