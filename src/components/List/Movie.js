//import { useEffect, useState } from "react";
import React from 'react';
import './Movie.scss';
import MovieInfo from '../movieInfoComponent/MovieInfo';



const Movie=({/*title,overview,poster_path,vote_average,release_date,
popularity,id,original_language, vote_count,imagemovies, */viewMovieInfo,image,title,movieId})=>{
   // const movies =[1,2,3,4];
    return(
        <> 
        
            <MovieInfo viewMovieInfo={viewMovieInfo} image={image} title={title} movieId={movieId}/>
    
        </>
            
            
    
    );      
            
};

export default Movie;


// {movies.map(movie=>
//     {return(
//        <MovieInfo key={movie.id} movieId={movie.id} viewMovieInfo={viewMovieInfo} image={movie.poster_path} title={movie.title}/>
//     );
//    })}






// {/* <div className='movie'>
//                 <a href='#'>
//                 { image==null? 
//                     <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt={title}/>
//                     :
//                     <img src={IMG_API+poster_path} alt={title}/>}
                
//                 <div className='movie-info'>
//                     <h3>{title}</h3><br/>
//                     <span>{vote_average}</span>
//                 </div>
//                 <div className='movie-overview'>
//                     <h3>overview</h3>
//                     <p>{overview}</p>
//                 </div>
//                 </a>
//             </div> */}