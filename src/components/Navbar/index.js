import React from "react";
import Score from "../Score"
import "./style.css";

function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand">Clicky Game</h1>
            <span className="">{props.message}</span>
            <Score score={props.score}/>
        </nav>
    );
}

export default Navbar;