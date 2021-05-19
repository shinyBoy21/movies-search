
import React, {useEffect,useState} from 'react';
import './Series.scss';
import Movie from '../List/Movie';
import Pagination from '../pagination/Pagination';
import InputField from '../search/Input';
import MovieDetail from '../movieDetail/MovieDetail';
import Loader from '../loader/Loader';


const SEARCH_API='https://api.themoviedb.org/3/search/movie?&api_key=552211b10d801ec9f88058536e25d2c3&query=';
const SERIES_API='https://api.themoviedb.org/3/tv/popular?api_key=552211b10d801ec9f88058536e25d2c3&language=en-US&page=1'


function SeriesPage() {

  const[movies,setMovies]=useState([]);
  const [searchItem,setSearchItem]= useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false); 
  const [currentPage,setCurrentPage]=useState(1);
  const [total_results, setTotalResult]= useState(0);
  const [currentMovie, setCurrentMovie]=useState(null);

  const handleChange=(e)=>{
    setSearchItem(e.target.value)
  };

  const getMovies=(API)=>{
    fetch(API)
      .then (response =>response.json())
      .then(data => {
          setMovies(data.results);
          setTotalResult(data.total_results)
          setIsLoading(false);
        })
        .catch(() => setIsError(true));
  }

  useEffect(()=>{
    getMovies(SERIES_API);
  },[]);

  const handleOnSubmit=(e)=> {
    e.preventDefault();

    if(searchItem){
      setIsLoading(true);
      getMovies(SEARCH_API+searchItem);
    }
  };

  const nextPage=(pageNumber)=> {
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=552211b10d801ec9f88058536e25d2c3&query=${searchItem}&page=${pageNumber}`)
      .then (response =>response.json())
      .then(data => {
          setMovies(data.results);
          setIsLoading(false);
          setCurrentPage(pageNumber)
        })
  };

  const viewMovieInfo=(id)=>{
     const filteredMovie=movies.filter(movie=>movie.id===id);
     setCurrentMovie(filteredMovie);
   };
  const closeMovieInfo =()=> {
     setCurrentMovie(null)
   };
   

  const numberPages=Math.floor(total_results/20);

  return (
    <>
      
{currentMovie==null?
  //first condition
  <div className='moviePage'>
    <div className='search'>
    <InputField id='input' type='text' onChange={handleChange} onSubmit={handleOnSubmit} value={searchItem}/>
    </div>

    <span className='category'>Popular</span>
  
    <div className='movies'>
      {isError && <p className='error'><i class="fas fa-exclamation-triangle"></i>Something went wrong ...Refresh the page!</p>}
      {isLoading?
      (<Loader className='loader'/>):
      movies.length>0 && movies.map(movie=>
      <Movie viewMovieInfo={viewMovieInfo} movies={movies} movieId={movie.id} image={movie.poster_path} title={movie.title} /*movies={movies}movie={movie} title={movie.title} image={movie.poster_path} className='movies-list' key={movie.id} {...movie}*//>
      )
      }
    </div>

    <div className='pages'>
    {searchItem && total_results>20?
    <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/>
    :
    ''
    }
    </div>
  </div>
  //first condition
    :
  //second condition
  <div>
    <MovieDetail closeMovieInfo={closeMovieInfo} currentMovie={currentMovie[0]}/>
  </div>
  //second condition
  }
    </>
  );
}

export default SeriesPage;
