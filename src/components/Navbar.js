import React from "react"

import logo from "../images/react-icon-small.png"

export default function Navbar(){
    return (
        <nav className="navBar">
            <img className="nav-logo" src = {logo}  />
            <h3 className="nav-logotext">
                ReactFacts
            </h3>
            <h4 className="nav-title">
                React Course - Project 1
            </h4>
        </nav>
    )
}