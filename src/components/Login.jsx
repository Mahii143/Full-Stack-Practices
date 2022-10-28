import React, { Component } from 'react'

export default class login extends Component {
    render() {
        return (
            <div>
                <input type="text" name="username" id="user" />
                <button type="submit">Submit</button>
            </div>
        )
    }
}
