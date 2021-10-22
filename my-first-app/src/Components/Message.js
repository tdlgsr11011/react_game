import React,{Component} from "react";

class Message extends Component{

    

    constructor(){
        super()
        this.state={
            message: 'Welcome Visitor!',
            buttonText: 'Subscribe'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks For The Sub!',
            buttonText: 'Subscribed'
        })
    }

    render() {

        const {message, buttonText} = this.state

        return(
            <div>
                <h2>{message}</h2>
                <button onClick={()=>this.changeMessage()}>{buttonText}</button>
            </div>
            
        )
    }    
}

export default Message