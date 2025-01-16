import './Registro.css'
import {Link} from "react-router-dom"
function Registro(){
    return(
        <>
        <section className="box-primary-registro">
            <div className="box-registro">
                <h1 className='cabecalho-registro'>Registrar-se</h1>
                    <form action="" className="box-inputs-registro">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Location" />
                    <button type="submit"className='button-login'>Login</button>
                    <div className="termos">
                        <a href="#" >
                            <input
                            type="checkbox"
                            name="termos"
                            id="termos"
                            />
                            Concordo com os termos
                        </a>
                    </div>
                </form>
                <Link to="/"id='login'>Login</Link>
            </div>
            <div className="box-img-registro">
                {/* <img src={loginPng} alt="Fundo Filmes" /> */}
            </div>
        </section>
        </>
    )
}
export default Registro