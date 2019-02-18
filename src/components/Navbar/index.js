import React from "react";
import Score from "../Score"
import "./style.css";

function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand">Clicky Game</h1>
            <Score score={props.score}/>
        </nav>
    );
}

export default Navbar;