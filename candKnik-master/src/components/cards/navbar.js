import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header style={{marginBottom: '70px'}}>
            <div>
                <h3 className="float-md-start mb-0">Knockri</h3>
                <nav style={{flexWrap: 'nowrap'}} className="nav nav-masthead justify-content-center float-md-end">
                    <NavLink className="nav-link" to="/">Candidates</NavLink>
                    <NavLink className="nav-link" to="/questions">Questions</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar