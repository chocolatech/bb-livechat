import React, { Component } from 'react'

class Input extends Component {
    state = {
        text: ''
    }

    onChange = (event) => {
        this.setState({text: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({text: ''})
        this.props.onMessageSend(this.state.text)
    }

    render() {
        return (
            <div className="Input">
                <form onSubmit={event => this.onSubmit(event)}>
                    <input type="text" onChange={event => this.onChange(event)} value={this.state.text}
                        placeholder="Start writing..." autoFocus={true} />
                    <button>Send</button>
                </form>
            </div>
        )
    }
}

export default Input