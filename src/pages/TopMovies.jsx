import { useState, useEffect } from "react";


const Movies = () => {

    const [topMovies, setTopMovies] = useState([])
    
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
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        TopMoviesApi()
        console.log(topMovies);
    }, [])
    
    const movie = topMovies.map((el) => <div key={topMovies.indexOf(el)}>
        <h1 className="movie-title">{el.title}</h1>
        <img src={el.image} alt="" />
        <p>{el.year}</p>
        <p>{el.timeline}</p>
        <p>{el.rating}</p>
        </div>)
    return movie

}


const TopMovies = () => {


    return(
        <>
            <Movie />
        </>
    )
};

export default TopMovies;