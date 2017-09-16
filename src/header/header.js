import React from 'react';
import Logo from '../logo/logo';
import Search from '../search/search';
import './header.scss';

const Header = () => (
    <div className="header">
        <Logo></Logo>
        <Search></Search>
    </div>
)

export default Header;
