import React from 'react';
import './MovieDetail.scss';


const IMG_API='https://image.tmdb.org/t/p/w1280';


function MovieDetail({closeMovieInfo,currentMovie}) {
    return (
        <div className='container'>

            <div className='container-left'>
                <div className='container-left-back' onClick={closeMovieInfo}>
                    <i className='fas fa-arrow-left'>Go back</i>
                </div>
                <div className='container-left-info'>
                    <h3>{currentMovie.title}</h3>
                    <ul>
                        <li>{`Language: "${currentMovie.original_language}"`}</li>
                        <li>{`Release date: ${currentMovie.release_date}` }</li>
                        <li>{`Vote average: ${currentMovie.vote_average}`}</li>
                    </ul>
                </div>
                <div className='container-left-overview'>
                    <h4>Overview</h4>
                    <p>{currentMovie.overview}</p>
                </div>
            </div>

            <div className='container-right'>
                    {currentMovie.poster_path==null?
                    <img className='container-right-display-img' src='https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg' alt='card'/>
                    :
                    <img className='container-right-display-img' src={`https://image.tmdb.org/t/p/w1280${currentMovie.poster_path}`} alt='card'/>
                    }
            </div>

        </div>
    )
}

export default MovieDetail;


