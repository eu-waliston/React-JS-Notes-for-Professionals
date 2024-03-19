import React from "react";

interface IHelloMessage {
    name: string
}

interface IHelloMessageState {
    //empty in our case
}

const Hello = (props: any) => {
    return (
        <div className="">
            <h1>Hello {props.name}</h1>
        </div>
    )
}

export default Hello;