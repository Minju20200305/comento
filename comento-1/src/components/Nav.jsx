import React, {useState} from "react"
import "./Nav.css"
import "./FontAwesome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function Nav() {
    const [activeNav, setActiveNav] = useState(1)
return (
<nav className = "wrapper">
    <div>
        <Link to = "/" className="nav-link" onClick={() => setActiveNav(1)}>
            <FontAwesomeIcon icon="home"
            classsName={activeNav === 1 ? "nav-item active": "nav-item" }/></Link></div>
    <div>
        <Link to ="/detail"><FontAwesomeIcon icon="compass" /></Link>
    </div>
    <div>
        <FontAwesomeIcon icon="plus" />
    </div>
    <div>
        <FontAwesomeIcon icon="medal" />
    </div>
    <div>
        <FontAwesomeIcon icon="user" />
    </div>
    </nav>
    )
}

export default Nav