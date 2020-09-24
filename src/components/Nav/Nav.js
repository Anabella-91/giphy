import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <div className='nav'>
            <h3>GIPHY</h3>
            <ul className='nav-links'>
                <li><a href='/'>Inicio</a></li>
                <li><a href='/perfil'>Perfil</a></li>
            </ul>
        </div>
    )
}

export default Nav
