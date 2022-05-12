import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return(
        <div className="App-nav">
            <NavLink to="/" >
                <h1>Netflix</h1>
            </NavLink>
            <NavLink to="/" className={ (nav) => (nav.isActive ? "nav-active" : "")}>
                Acceuil
            </NavLink>
            <NavLink to="/account" className={ (nav) => (nav.isActive ? "nav-active" : "")}>
                Compte
            </NavLink>
        </div>
    )
}

export default Navbar