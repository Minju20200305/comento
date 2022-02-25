import React, { useState } from "react"
import styled from "styled-components";
import "./Nav.css"
import "../FontAwesome";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Nav() {
  const [activeNav, setActiveNav] = useState(1)
  return (
    <NavWrapper className="wrapper">
      <div className="link">
        <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
          <FontAwesomeIcon icon="home"
            classsName={activeNav === 1 ? "nav-item active" : "nav-item"} /></Link></div>
      <div>
        <Link to="/detail"><FontAwesomeIcon icon="compass" /></Link>
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
    </NavWrapper>
  )
}

export default Nav;

const NavWrapper = styled.nav`
    
    nav > div {
        text-align: center;
        float: left;
        width: 50%;


        height: 45px;
        line-height: 45px;
    }

    .nav-item{
        color: grey
    }
    .active{
    color: purple;
    }

`;
