import React from 'react';
import Logo from '../logo';
import './header.scss';

const Header = ({headerContent}) => (
    <div className="header">
        <Logo></Logo>
        {headerContent}
    </div>
)

export default Header;
