import './Login.css'
import {Link} from 'react-router-dom'
function Login(){
   return(
        <>
        <section className="box-primary">
            <div className="box-login">
                <h1 className='cabecalho'>Login</h1>
                <form action="" className="box-inputs">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <Link to='/home'className='button-login'>
                        <button type="submit">Login</button>
                    </Link>
                    <div className="termos">
                        <a href="#" >
                            <input
                            type="checkbox"
                            name="termos"
                            id="termos"
                            />
                            Concordo com os termos
                        </a>
                        <a href="#">Forgot Password?</a>
                    </div>
                </form>
                <Link to="/registrar"id='registrar'>Registrar-se</Link>
            </div>
            <div className="box-img">
                {/* <img src={loginPng} alt="Fundo Filmes" /> */}
            </div>
        </section>
        </>
    )
}
export default Login