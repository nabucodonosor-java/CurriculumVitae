import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menu from 'assets/images/menu-icon.svg';
import Logo from 'assets/images/curriculum-logo.png';

import './styles.scss';

const Navbar = () => {
    const [drawerActive, setDrawerActive] = useState(false);

    return (
        <nav className="bg-primary navbar-main">

            <Link to="/" className="navbar-logo-text"> 
                <img
                    src={Logo}
                    alt="logo do site"
                    className="navbar-logo" />
                <h4>Curriculum Vitae</h4>
            </Link>
            <button className="navbar-mobile-btn" type="button" onClick={() => setDrawerActive(!drawerActive)}>
                <img src={menu} alt="Mobile Menu" />
            </button>

            <div className={drawerActive ? "navbar-mobile-container" : "navbar-menu-container"}>
                <ul className="navbar-main-menu">
                    <li>
                        <NavLink onClick={() => setDrawerActive(false)} className="navbar-link" to="/" activeClassName="active" exact>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setDrawerActive(false)} className="navbar-link" to="/experiencia-profissional" activeClassName="active" exact>PROFISSIONAL</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setDrawerActive(false)} className="navbar-link cursor-academic" to="/formacao-academica" activeClassName="active" exact>ACADÊMICO</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setDrawerActive(false)} className="navbar-link" to="/projetos" activeClassName="active" exact>PROJETOS</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;