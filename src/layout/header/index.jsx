import React from 'react';
import Logo from '../logo';
import './header.scss';

const Header = ({headerContent}) => (
    <div className="header">
        <div style={{marginLeft: '10%'}}>
            <Logo></Logo>
        </div>
        {headerContent}
    </div>
)

export default Header;
