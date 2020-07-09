import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="cta-header">
            <div className="container">
                <ul className="cta-contact inline-list">
                    <li>Téléphone : <a href="tel:0123456789">0123456789</a></li>
                    <li>Email : <a href="mailto:contact@lojeris.fr">contact@lojeris.fr</a></li>
                </ul>
            </div>
        </div>
        <div className="container main-header">
        
            <nav className="main-nav">
                <ul>
                  <li className="nav-item">
                        <Link className="navbar-brand" to="/">

                </Link>
                    </li>
                  <li className="nav-item">
                    <NavLink to="/" exact className={"nav-link"}>
                      Accueil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/agency" className={"nav-link"}>
                      Notre Agence
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/properties" className={"nav-link"}>
                      Biens Immobiliers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/propertyHome" className={"nav-link"}>
                      Proposer votre bien
                    </NavLink>
                  </li>
                </ul>
            </nav>
        </div>
    </header>
    );
  }
}

export default Nav;
