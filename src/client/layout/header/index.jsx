import React from 'react';
import Logo from '../logo';
import style from './header.scss';

const Header = ({headerContent}) => (
    <div className={style.header}>
            <Logo />
        {headerContent}
    </div>
)

export default Header;
