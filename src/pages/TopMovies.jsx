import { useState, useEffect } from "react";
import './TopMovies.css'

const Rating = (movie) => {

    if(movie.rating.length > 0) 
    {return movie.rating.split('')[0]+movie.rating.split('')[1]+movie.rating.split('')[2]}
    else {
        return '??'
    } 
    
}

const Loading = () => {
    return (
        <div className="loading">
            <h1>Carregando...</h1>
        </div>
    )
}

const Movie = () => {

    const [topMovies, setTopMovies] = useState([])
    const [loadingRemove, setLoadingRemove] = useState(false)
    
    const url = 'https://moviesverse1.p.rapidapi.com/top-250-movies';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26d18a8939mshde932c4e886dec7p1d9ed5jsnf658c980a7f4',
            'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
        }
    };
    const TopMoviesApi = async () => {
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setTopMovies(result.movies)
            setLoadingRemove(true)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        TopMoviesApi()
    }, [])
    
    const movie = topMovies.map((el) => <div key={topMovies.indexOf(el)} className="top-movies-movie-container">
        <div className="top-movies-information-container">
            <h3>{el.title}</h3>
            <p>{Rating(el)}</p>
        </div>
        <img src={el.image} alt="" />
        </div>)

    return (
        <>
            {movie}
            {!loadingRemove && <Loading/>}
        </>
    )

}


const TopMovies = () => {


    return(
        <div className="content">
            <Movie />
        </div>
    )
};

export default TopMovies;