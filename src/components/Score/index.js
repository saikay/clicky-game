import React from "react";

function Score(props){
    return (
        <div>
            Score: {props.score ? props.score: 0}
        </div>
    )
}

export default Score;