import React from 'react'
import './myStyle.css'

function StyleSheet(props) {

    let className = props.primary ? 'primary' : ''

    return (
        <div>
            <h3 className={className}>Stylish!</h3>
        </div>
    )
}

export default StyleSheet
