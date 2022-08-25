import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'

function App() {
  const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=12c81c5ce0fddd8d013802e4980abcfc&page=1';
  
  const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=12c81c5ce0fddd8d013802e4980abcfc&query="';

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    async function getMovies(url) {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        }
      getMovies(API_URL)
  },[])
    const handleOnSubmit = (event) =>{
      event.preventDefault();
      async function getMovies(url) {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        }
      getMovies(SEARCH_URL+search)
      setSearch('');


    }

    const handleOnChange = (event) => {
      setSearch(event.target.value)
    }


  const length = movies.length;
  const moviesA = movies.map(movie => {
    return(
    <Main
      key = {movie.id}
      title = {movie.title}
      poster_path = {movie.poster_path}
      overview = {movie.overview}
      rating = {movie.vote_average}
    />
    )
  })

  return (
    <div>
      <header>
        <h1 className='title'>
          Movie List App
        </h1>
        <form id="form" onSubmit={handleOnSubmit}>
          <input 
            type="text"
            id="search"
            className="search"
            placeholder='Search'
            value = {search}
            onChange = {handleOnChange}
          />
            </form>
        </header>
      {moviesA}
    </div>
    
  )
}

export default App
