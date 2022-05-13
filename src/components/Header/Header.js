import React from 'react';
import '../Header/Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='header__content'>
                        <h2><span style={{ color: '#9F0013' }}>Marvel</span> information portal</h2>
                        <div className='header__links'>
                            <a href='#'>Characters</a> / <a href='#'>Comics</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;