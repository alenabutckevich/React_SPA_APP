import React from 'react';
import Header from './header';
import MovieList from './movie-list';
import Footer from './footer';
import style from './layout.scss';
import '../styles/index.scss';

const Layout = ({headerContent, panel, query}) => (
    <div className={style.layout}>
        <Header headerContent={headerContent}></Header>
        <div className={style.panel}>{panel}</div>
        <MovieList query={query}></MovieList>
        <Footer></Footer>
    </div>
)

export default Layout;
