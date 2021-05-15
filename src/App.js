import React from 'react';
import './App.scss'
import Menu from './components/navbar/Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MoviesPage from './components/moviesPage/MoviesPage';
import Footer from './components/footer/footer';
import Home from './home/Home';
import Series from './series/Series';
//import MoviesPage from './components/moviesPage/MoviesPage';


function App() {
    return (
        <Router>
        <div className='app'>
            <div className='app-menu'><Menu/></div>
            <Route path="/" exact component={Home}></Route>
            <Route path="/movies" component={MoviesPage}></Route>
            <Route path="/series"></Route>
            <div className='app-footer'><Footer/></div>
        </div>
        </Router>
    )
}

export default App;
