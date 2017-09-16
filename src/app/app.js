import React from 'react';
import Footer from '../footer/footer';
import Main from '../main/main';
import Header from '../header/header';
import './app.scss';

const App = () => (
    <div className="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
)

export default App;
