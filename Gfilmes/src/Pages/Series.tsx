import './styleUniversal.css'
import Header from '../Components/Header.tsx'
import {motion} from 'framer-motion'
import {fadeIn} from '../Components/variavel.ts'
import LogoDisney from '../assets/imgs/logo-disney.png'
function Series(){
    return(
        <>
        <Header/>
        <main>
            <section className='streaming'>
                    <h2>Streaming</h2>
                    <div className="logo-streaming">
                        <motion.img src={LogoDisney}
                            variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}
                        />
                        <motion.img src={LogoDisney}
                            variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}
                        />
                        <motion.img src={LogoDisney}
                            variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}
                        />
                        <motion.img src={LogoDisney}
                            variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}
                        />
                        <motion.img src={LogoDisney}
                            variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}
                        />
                        <motion.img src={LogoDisney}
                            variants={fadeIn("up",0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once:false,amount:0.7}}
                        />
                    </div>
                </section>
                <section className='cine'>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>

                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>

                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>

                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>

                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>

                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme ">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>

                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                    <div className="filme">
                        <img src="https://cinemaluxe.cam/wp-content/uploads/2025/01/Ac8ruycRXzgcsndTZFK6ouGA0FA-200x300.jpg"/>
                        <div className='informacao-filmes'>
                            <h3 className="name-filme">Alice in Borderland</h3>
                            <p className="ano-lancamento">2024</p>
                        </div>
                    </div>
                </section>
        </main>
        </>
    )
}
export default Series