//import { useEffect, useState } from "react";
import React from 'react';
import './MovieInfo.scss';
//import InputField from '../search/Input';


//<img src={IMG_API+poster_path} alt={title}/>
//<span>{title}</span>


//const FEATURED_API='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=552211b10d801ec9f88058536e25d2c3&page=1';
const IMG_API='https://image.tmdb.org/t/p/w1280';


const MovieInfo=({image,title,viewMovieInfo,movieId})=>{
    return(
        <>
        
            <div className='movie'>
                { image==null? 
                     <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt={title}/>
                    :
                    <img src={IMG_API+image} alt={title}/>}
                
                <div className='movie-info'>
                     {/* <h3>{title}</h3><br/> */}
                     <a href='#' onClick={()=>viewMovieInfo(movieId)}>View details</a>
                </div>
                 
             </div>
        
        </>
            
    );      
            
};

export default MovieInfo;