import React from 'react'

const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Hey {props.name}!</h2>
        </div>
    )
} 


export default Hello