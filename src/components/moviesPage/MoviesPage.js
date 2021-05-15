import React, {useEffect,useState,useRef,useReducer} from 'react';
import ReactPaginate from 'react-paginate';
import './MoviesPage.scss';
//import Btn from './get started btn/BTN';
//import Header from '../header/Head';
import Movie from '../List/Movie';
import Pagination from '../pagination/Pagination';//'./pagination/Pagination';
import InputField from '../search/Input';
import MovieInfo from '../movieInfoComponent/MovieInfo';
import MovieDetail from '../movieDetail/MovieDetail';
import ImageSlider from '../carrousel/ImageSlider';
import Loader from '../loader/Loader';


const SEARCH_API='https://api.themoviedb.org/3/search/movie?&api_key=552211b10d801ec9f88058536e25d2c3&query=';
//const MY_API='https://api.themoviedb.org/3/movie/550?api_key=552211b10d801ec9f88058536e25d2c3';
const FEATURED_API='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=552211b10d801ec9f88058536e25d2c3&page=1';


function MoviesPage() {
 

  const[movies,setMovies]=useState([]);
  const [searchItem,setSearchItem]= useState(''/*localStorage.getItem('search')*/);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false); 
  const [currentPage,setCurrentPage]=useState(1);
  const [total_results, setTotalResult]= useState(0);
  const [currentMovie, setCurrentMovie]=useState(null);

  const handleChange=(e)=>{
    setSearchItem(e.target.value)
    //console.log(e.target.value)
  };

  const getMovies=(API)=>{
    fetch(API)
      .then (response =>response.json())
      .then(data => {
          setMovies(data.results);
          setTotalResult(data.total_results)
          setIsLoading(false);
          //console.log(data);
         // console.log(data.total_results)
        })
        .catch(() => setIsError(true));
  }

  useEffect(()=>{
   // setIsLoading(false);
    getMovies(FEATURED_API);
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
         // console.log(pageNumber);
          //console.log(currentPage);
          //console.log(pageNumber)
        //console.log(data)
        })
  };
   //Method to view movie Infos
   //method to show the movie item
  const viewMovieInfo=(id)=>{
     const filteredMovie=movies.filter(movie=>movie.id==id);
     const newCurrentMovie=filteredMovie.length>0?filteredMovie[0]:null;
     setCurrentMovie(filteredMovie);
   };
  const closeMovieInfo =()=> {
     setCurrentMovie(null)
   };
   //
  
 
  

  
  //const newMovies=[];
 
    //trying to fetch all movies
  //   for (let i=1;i<=20;i++){
  //   fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=552211b10d801ec9f88058536e25d2c3&page=${i}`)
  //     .then (response =>response.json())
  //     .then(data => {
  //         setMovies(data.results);
  //         setTotalResult(data.total_results)
  //         setIsLoading(false);
 
  //       })
        
  //       .catch(() => setIsError(true));

  //     }
 
  // }, []);
  console.log(currentMovie);

  const numberPages=Math.floor(total_results/20);
  //console.log(searchItem);
  //console.log(currentMovie[0]);

  return (
    <>
      
{currentMovie==null?
  //first condition
  <div className='moviePage'>
    <div className='search'>
    <InputField id='input' type='text' onChange={handleChange} onSubmit={handleOnSubmit} value={searchItem}/>
    </div>

    <div className='carrousel'><span className='category'>Now Playing</span><ImageSlider/></div>
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

export default MoviesPage;








// {/* <div className='header'><p>ljhfushfulfhlshuqhlushqsh</p></div>

// <div className="movies">

//   {/* <div className='movies-header'>
//     <Header handleChange={handleChange} searchItem={searchItem} handleOnSubmit={handleOnSubmit}/>
//   </div> */}

//   {isError && <p>Something went wrong ...</p>}
//   {isLoading?
//   (<p className='loader'>Loading...</p>):
  
//   movies.length>0 && movies.map(movie=>
//   <div className='movies-list'>
//   <Movie className='movies-list-container' key={movie.id} {...movie}/>
//   </div>)
//   }
// </div>

// {searchItem && total_results>20?
//   <div className='movies-pages'>
//   <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/>
//   </div>:
//   ''}


//  */}

{/* <div className='pages'>
{searchItem && total_results>20?
<Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/>
:
''}
</div> */}



