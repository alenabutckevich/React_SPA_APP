import React from 'react';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import Header from '../header/header';
import './app.scss';

const App = () => (
    <div className="app">
        <Header></Header>
        <MovieList></MovieList>
        <Footer></Footer>
    </div>
)

export default App;
