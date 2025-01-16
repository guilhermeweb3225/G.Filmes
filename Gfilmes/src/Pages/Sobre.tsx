import './Sobre.css'
import Header from '../Components/Header.tsx'
function Sobre(){
    return(
        <>
        <Header/>
        <section className='sobre'>
            <div className="texto">
                <h1>Sobre o G.Filmes</h1>
                <p>.O G.Filmes foi criado com dedicação e paixão por mim, Guilherme Ponciano, com o objetivo de trazer uma plataforma acessível e gratuita para você assistir a seus filmes e séries favoritos. 🎥</p>
                <p>.Desenvolvi este site pensando em facilitar sua vida, permitindo que você aproveite o melhor do entretenimento sem se preocupar com custos ou assinaturas.</p>
                <p>.O foco está na qualidade e experiência do usuário, garantindo uma navegação intuitiva e agradável.</p>
                <p>.Como desenvolvedor independente, dedico-me a melhorar continuamente a plataforma para que ela seja sempre prática e completa. 💻🍿</p>
                <p>.Aqui, você encontra um vasto catálogo atualizado, acessível em qualquer dispositivo.</p>
            </div>
        </section>
        </>
    )
}
export default Sobre