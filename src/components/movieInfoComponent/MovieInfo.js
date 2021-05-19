import React from 'react';
import './MovieInfo.scss';

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
                     <button onClick={()=>viewMovieInfo(movieId)}>View details</button>
                </div>
                 
             </div>
        
        </>
            
    );      
            
};

export default MovieInfo;