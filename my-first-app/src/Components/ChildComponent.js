import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('Babua')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
