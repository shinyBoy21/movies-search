import React from 'react';
import './App.scss'
import Menu from './components/navbar/Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MoviesPage from './components/moviesPage/MoviesPage';
import Footer from './components/footer/footer';
import Home from './home/Home';
import SeriesPage from './components/seriesPage/Series';

function App() {
    return (
        <Router>
        <div className='app'>
            <div className='app-menu'><Menu/></div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/movies" component={MoviesPage}></Route>
            <Route path="/series" component={SeriesPage}></Route>
            <div id='contacts' className='app-footer'><Footer/></div>
        </div>
        </Router>
    )
}

export default App;
