import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        return (
            this.state.isLoggedIn ? (
                <div>Yo Homie!</div>
            ) : (
                <div></div>
            )
        )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = 'Yo Homie!'
        // }
        // else {
        //     message = 'Welcome Guest'
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
    }
}

export default UserGreeting
