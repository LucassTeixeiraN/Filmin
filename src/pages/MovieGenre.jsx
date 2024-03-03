import { useState, useEffect } from "react";

import GenreSelector from "../components/GenreSelector";

const getMovieGenre = () => {

}

const Movie = () => {

    const [movieGenre, setmovieGenre] = useState([])
    
    const url = `https://moviesverse1.p.rapidapi.com/get-by-genre?genre=${genre}`;
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
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
        
        useEffect(() => {
            MovieGenreApi()
        }, [])
}




const MovieGenre = () => {

    const [data, setData] = useState('');
    
    const genreSelected = (data) => {
        setData(data)
    }
    
    return(
        <>
            <GenreSelector genreSelected={genreSelected}/>
            <h1>{data}</h1>
            {/* <MovieGenreList /> */}
        </>
    )
};

export default MovieGenre;