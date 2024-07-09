import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png'

export default function Sobre() {
    return (
        <section className='limitar-secao secao-sobre'>
            <img src={imagemSobre} alt="imagem-sobre" />
            <article className="sobre-descricao">
                <h4>Quem sou eu?</h4>
                <h2>Pedro Tesch,</h2>
                <h2 id='titulo'>Desenvolvedor Full-Stack.</h2>
                <p id='skills'>Estou atualmente cursando Engenharia da Computação no CEFET-RJ. Constantemente busco aprimorar minhas habilidades através do desenvolvimento de projetos pessoais, visando expandir meu conhecimento e experiência. Já estagiei em grandes empresas como Orange e BTG Pactual e atualmente atuo como Desenvolvedor Web Full-stack fazendo freelances!</p>
            </article>
        </section>
    )
}