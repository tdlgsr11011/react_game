import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state={
            count: 0,
            number: 10
        }
    }
    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        //     ()=>{
        //         console.log(this.state.count)
        //     }
        // )  

        // this.setState((previousState)=>{
        //     var count = previousState.count + 1
        //     return({count})
        // })

        this.setState(prevstate=>({
            count: prevstate.count + 1
        }))

    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>  
            </div>
        )
    }
}

export default Counter
