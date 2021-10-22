import React, {Component} from "react";


class ClassClick extends Component {
    
    ClickHandler() {
        console.log('button clicked')
    }

    render(){
        return(
            <div>
                <button onClick={this.ClickHandler}>CLick me</button>
                {/* <button onClick={()=>this.ClickHandler()}>Click me</button> */}
            </div>
        )
    }

}

export default ClassClick