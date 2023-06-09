import React, { useState, useEffect } from "react";
import './App.css';

import SearchIcon from './search.svg'

import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?apikey=a9c7020d'

const App = () => {

    const [movies, setMovies]  = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('marvel');
    }, [])
    return(
         <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={SearchIcon} alt="Search"
                onClick={() =>  searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0 ?
                (
                    <div className="container">
                        {movies.map((movie)=> (
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ):(
                    <div className="empty">
                      <h1>No Movies Found</h1> 
                      </div>
                )

            }

         </div>
    );
}

export default App;