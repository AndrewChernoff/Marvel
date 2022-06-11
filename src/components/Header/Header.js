import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <h2><span style={{ color: '#9F0013' }}>Marvel</span> information portal</h2>
                    <div className='header__links'>
                        <NavLink to="/"
                        >Characters</NavLink> / <NavLink to="comics"
                        >Comics</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;