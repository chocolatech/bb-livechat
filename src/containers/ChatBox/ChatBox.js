import React, { Component } from 'react'
import Messages from '../../components/Messages/Messages'
import Input from '../../components/Input/Input'

//TODO add '/' screen with username input
function randomName() {
    const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"]
    const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"]
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    return adjective + noun;
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16)
}
//todo end

class Chatbox extends Component {

    state = {
        messages: [
            {
                text: "This is a test message!",
                user: {
                    id: Math.floor(Math.random()),
                    color: "blue",
                    username: "bluemoon"
                }
            }
        ],
        user: {
            id: 555,
            username: randomName(),
            color: randomColor()
        }
    }

    sendMessage = (message) => {
        const messages = this.state.messages
        messages.push({
            text: message,
            user: this.state.user
        })

        this.setState({ messages: messages })
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{this.state.messages[0].user.username}</h1>
                </div>
                <Messages
                    messages={this.state.messages}
                    currentUser={this.state.user}
                />
                <Input onMessageSend={this.sendMessage} />
            </div>
        )
    }
}
export default Chatbox