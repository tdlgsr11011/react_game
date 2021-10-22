import React from 'react'
import Person from './Person'

function NameList() {

    const names = ['Bruce', 'Steve', 'Thor']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'react'
    //     },
    //     {
    //         id: 2,
    //         name: 'Steve',
    //         age: 28,
    //         skill: 'angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Thor',
    //         age: 32,
    //         skill: 'hammer'
    //     }
    // ]

    // const personList = persons.map(person => <Person key={person.id} personInfo={person}></Person>)
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default NameList