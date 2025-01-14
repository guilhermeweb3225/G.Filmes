import './Login.css'
//import loginPng from '../../public/img-fundo-filmes.png'

function Login(){
    return(
        <>
        <section className="box-primary">
            <div className="box-login">
                <h1 className='cabecalho'>Login</h1>
                <form action="" className="box-inputs">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
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
                        <a href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
            <div className="box-img">
                {/* <img src={loginPng} alt="Fundo Filmes" /> */}
            </div>
        </section>
        </>
    )
}
export default Login