import React from 'react';
import Header from './header';
import MovieListContainer from './movie-list/movie-list-container';
import Footer from './footer';
import './layout.scss';
import '../styles/index.scss';

const Layout = ({headerContent, panel, query}) => (
    <div className="layout">
        <Header headerContent={headerContent}></Header>
        <div className="panel">{panel}</div>
        <MovieListContainer query={query}></MovieListContainer>
        <Footer></Footer>
    </div>
)

export default Layout;
