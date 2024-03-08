import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className='Home'>
            <h1>Você quer conhecer</h1>
            <Link to={'/movieGenre'} className='homePaths'>Filmes por gênero</Link>
            <h2>ou</h2>
            <Link to={'/topMovies'} className='homePaths'>Filmes mais bem avaliados?</Link>
        </div>
    )
};

export default Home;