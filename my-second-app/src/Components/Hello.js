import React, { Component } from "react";
import { render } from "@testing-library/react";

const Hello = (props) => {
    console.log(props)

    render()
    {
        return(
            <h2>Hey {props.name}!</h2>
        )
    }

}

export default Hello
