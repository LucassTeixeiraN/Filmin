import { useState, useEffect } from "react";

import GenreSelector from "../components/GenreSelector";
import './MovieGenre.css'

const Movies = ( genre ) => {

    const [movieGenre, setmovieGenre] = useState([])

    const url = `https://moviesverse1.p.rapidapi.com/get-by-genre?genre=${genre.genre}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26d18a8939mshde932c4e886dec7p1d9ed5jsnf658c980a7f4',
            'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
        }
    };

    const MovieGenreApi = async() => {

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setmovieGenre(result.movies)
        } catch (error) {
            console.error(error);
        }
    }
        
        useEffect(() => {
            MovieGenreApi()
        }, [genre])


        const movie = movieGenre.map((movie) => <div key={movieGenre.indexOf(movie)} className="movie-container">
            <div className="information-container">
                <h3>{movie.title}</h3>
                <p>{movie.imdbRating.split('')[0]+movie.imdbRating.split('')[1]+movie.imdbRating.split('')[2]}</p>
            </div>
            <img src={movie.posterImage} alt="" />
            </div>)


        return movie

}

const MovieGenre = () => {

    const [genre, setGenre] = useState('');

    const genreSelected = (genre) => {
        setGenre(genre)
    }

    return(
        <>
            <GenreSelector genreSelected={genreSelected}/>
            <div className="content">
                <Movies genre={genre}/>
            </div>
        </>
    )
};

export default MovieGenre;