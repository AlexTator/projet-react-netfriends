import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <div className="App-nav">
            <div className="Nav-brand">
                <NavLink to="/">
                    <h1>Netflix</h1>
                </NavLink>
                <p>Catégorie</p>
                <p>Catégorie</p>
                <p>Catégorie</p>
            </div>
            <NavLink to="/account" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                Compte
            </NavLink>
        </div>
    )
}

export default Navbar