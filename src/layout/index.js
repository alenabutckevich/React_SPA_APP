import React from 'react';
import Header from './header';
import MovieList from './movie-list';
import Footer from './footer';
import './layout.scss';
import '../styles/index.scss';

const Layout = ({headerContent, panel}) => (
    <div className="layout">
        <Header headerContent={headerContent}></Header>
        <div className="panel">{panel}</div>
        <MovieList></MovieList>
        <Footer></Footer>
    </div>
)

export default Layout;
