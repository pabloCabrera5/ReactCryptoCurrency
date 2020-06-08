import React from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
//https://stackoverflow.com/questions/49547239/reactjs-styles-leaking-to-other-components
export const Header = () => {
    return (
        <div className='header' >
            <h1>
                CryptoCurrencys
            </h1>
            <nav className='menu'>
                <ul>
                    <li>
                        <NavLink to='/home' activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/card' activeClassName="active">CryptoCards</NavLink>
                    </li>

                    <li>
                        <Link to='/table'>CryptoTable</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}