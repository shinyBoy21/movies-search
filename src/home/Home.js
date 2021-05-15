import React from 'react';
import Btn from '../components/get started btn/BTN';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesPage from '../components/moviesPage/MoviesPage';
import './Home.scss';


function Home() {
    return (
        <div className='home'>
            <div className='home-left'>
                <div className='home-left-welcome'>
                    <h1 className='home-left-welcome-hello'>Welcome.</h1>
                    <p className='home-left-welcome-search'>Find your movies and information related to them!</p>
                </div>
                <div  className='home-left-button'><Btn/></div>
            </div>
            <div className='home-right'></div>   
        </div>
    )
}

export default Home;

