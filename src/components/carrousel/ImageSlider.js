import React, {useEffect,useState} from 'react';
import './ImageSlider.scss';

const API_FEAT=`https://api.themoviedb.org/3/movie/now_playing?api_key=552211b10d801ec9f88058536e25d2c3&language=en-US&page=1`;
const IMG='https://image.tmdb.org/t/p/w1280';
const Api=`https://api.themoviedb.org/3/movie/upcoming?api_key=552211b10d801ec9f88058536e25d2c3&language=en-US&page=1`

const leftArr='<i class="fas fa-arrow-circle-left"></i>';
const rightArr='<i class="fas fa-arrow-circle-right"></i>';


const ImageSlider = () => {
    const[movies,setMovies]=useState([]);
    const [current,setCurrent]=useState(0);
    const length=movies.length;
  
    const getMovies=(API)=>{
      fetch(API)
        .then (response =>response.json())
        .then(data => {
            setMovies(data.results);
          })
    };
  
    useEffect(()=>{
       getMovies(Api);
     },[]);

    const nextSlider=()=> {
        setCurrent(current===length-1?0:current+1)
    };
    
    const prevSlider=()=> {
        setCurrent(current===0?length-1:current-1)
    };

    if(!Array.isArray(movies) || movies.length<=0){
        return null;
    }
    return (
        <section className='slider'>
        <i class="fas fa-arrow-circle-left slider-left-arrow"   onClick={prevSlider}></i>
        <i class="fas fa-arrow-circle-right slider-right-arrow" onClick={nextSlider}></i>
            {movies.map((image,index)=>{
                return (<div key={image.id} className={index===current? 'slide active': 'slide'}>
                        {index===current && (<>
                            <img src={IMG+image.backdrop_path} alt={image.title} className='slider-img'/>
                            <h3>{image.title}</h3>
                            </>
                        )}
                    
                    </div>
                );
            })}
        
        </section>
    );
}

export default ImageSlider;
