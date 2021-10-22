import React from 'react'

function Person({ personInfo }) {
    return (
        <div>
            <h3>I am {personInfo.name}. I am {personInfo.age} years old. My skill is {personInfo.skill}.</h3>
        </div>
    )
}

export default Person
