import React from 'react'

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
                    <label>
                        <input type="text" value={this.state.title} onChange={this.handleChangeTitle}/>
                    </label>
                    <label>
                        <textarea rows="5" value={this.state.body} onChange={this.handleChangeBody}/>
                    </label>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        )
    }
}

export default NewNote