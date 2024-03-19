import React from "react";

const UsingProps = ({ name, lastName }) => {
    return (
        <div className="usingProps">
            <p>
                Hi, {name} {lastName}, Welcome
            </p>
        </div>
    )
}

export default UsingProps