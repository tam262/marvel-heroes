import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

function Header(){
    return <div className="header">
        <Link to='/'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="logo"/>
        </Link>
    </div>
}

export default Header