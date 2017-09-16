import React from 'react';
import Logo from '../logo/logo';
import Search from '../search/search';
import './header.scss';

const Header = (props) => (
    <div className="header">
        <Logo></Logo>
        <Search filterMovies={props.filterMovies}></Search>
    </div>
)

export default Header;
