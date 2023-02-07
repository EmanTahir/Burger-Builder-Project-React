import React from 'react'
import logo from './burger-logo.png';


export default function Navbar() {
    return (
        <div>
            <nav className="navbar " style={{ backgroundColor: '#703b09' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Burger Builder" width="50" height="40" />
                    </a>
                    <ul className="navbar-nav ml-auto" style={{ display: 'flex', flexDirection: 'row' }}>
                        <li className="nav-item" style={{ display: 'block', width: 'auto', margin: '0 10px', padding: '0 ' }}>
                            <a className="nav-link" href="#" style={{ color: 'white', cursor: 'pointer' }}>Burger Builder</a>
                        </li>
                        <li className="nav-item" style={{ display: 'block', width: 'auto', margin: '0 ', padding: '0 ' }}>
                            <a className="nav-link" href="#" style={{ color: 'white' }}>Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
