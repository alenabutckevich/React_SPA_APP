import React from 'react';
import Logo from '../logo';
import style from './header.scss';

const Header = ({headerContent}) => (
    <div className={style.header}>
        <div style={{marginLeft: '10%'}}>
            <Logo></Logo>
        </div>
        {headerContent}
    </div>
)

export default Header;
