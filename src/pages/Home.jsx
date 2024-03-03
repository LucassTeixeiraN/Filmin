import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return(
        <div className='Home'>
            <h1>Você quer conhecer</h1>
            <Link to={'/topMovies'}>Filmes mais bem avaliados</Link>
            <h2>ou</h2>
            <Link to={'/movieGenre'}>Filmes por gênero?</Link>
        </div>
    )
};

export default Home;