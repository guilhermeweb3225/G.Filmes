import './Header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <div className="img-procura">
                <h1>G.Filmes</h1>
            </div>
            <div className="janelas">
                <input type="search" placeholder='Procurar'className='procurar'/>
                <Link to="/home">Home</Link>
                <Link to="/filmes">Filmes</Link>
                <Link to="/series">Séries</Link>
                <Link to="/explorar">Explorar</Link>
                <Link to="/sobre">Sobre</Link>
            </div>
        </header>
    )
}
export default Header