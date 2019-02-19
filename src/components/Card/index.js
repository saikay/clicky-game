import React from "react";

function Card(props){
    return (
        <div className="card col">
            <img id={props.item.id} src={props.item.imgSrc} className="card-img-top" alt="..." 
                onClick={props.onClickCard} data-isclicked={props.item.isclicked}/>
        </div>         
    )
}

export default Card