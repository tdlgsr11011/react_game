import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    userNameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentChangeHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    topicChangeHandler = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(`Do you want to submit ${this.state.username}, ${this.state.comments}, ${this.state.topic}?`)
        event.preventDefault()
    }

    render() {
        return (
            <form action="" onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="">Username </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.userNameChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="">Comments</label>
                    <textarea name="" id="" cols="30" rows="2" value={this.state.comments} onChange={this.commentChangeHandler}></textarea>
                </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select name="" id="" value={this.state.topic} onChange={this.topicChangeHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="java">Java</option>
                    </select>
                </div>
                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default Form
