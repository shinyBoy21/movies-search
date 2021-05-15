//import { useEffect, useState } from "react";
import React from 'react';
import './Movie.scss';
import MovieInfo from '../movieInfoComponent/MovieInfo';



const Movie=({viewMovieInfo,image,title,movieId})=>{
    return(
        <> 
        
            <MovieInfo viewMovieInfo={viewMovieInfo} image={image} title={title} movieId={movieId}/>
    
        </>
    );      
            
};

export default Movie;