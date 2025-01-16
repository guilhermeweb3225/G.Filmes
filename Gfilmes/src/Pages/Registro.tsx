import './Registro.css'
import {Link} from "react-router-dom"
function Registro(){
    return(
        <>
        <section className="box-primary-registro">
            <div className="box-registro">
                <h1 className='cabecalho-registro'>Registrar-se</h1>
                    <form action="https://api.sheetmonkey.io/form/gV9JDi5HFmL7uvxn2vfyWG" method="post" className="box-inputs-registro">
                    <input type="text"name="Name" placeholder="Username" required/>
                    <input type="email"name='Email' placeholder="Email" required/>
                    <input type="password"name='senha' placeholder="Password"required />
                    <input type="text"name='localidade' placeholder="Location" required/>
                    <input type="hidden" name="Created" value="x-sheetmonkey-current-date-time" />
                    <button type="submit">Registrar-se</button>
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