import React from "react";

function Score(props){
    return (
        <span>
            Score: {props.score ? props.score: 0}
        </span>
    )
}

export default Score;