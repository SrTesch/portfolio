// import { useState } from 'react';
import React from 'react';
import ProjetoCard from './projetocard.jsx';
import './projeto.css';
// import printAgencia from '../../img/agencia.jpg';
import printRRank from '../../img/printRegionalRank.png'
import printMulheresConectadas from '../../img/mulheresconectadasPC.png'

export default function Projeto() {
    // const [verMais, setVerMais] = useState(false);
    // const [fraseBotao, setFraseBotao] = useState("Ver mais");

    // const handleVerMaisClick = () => {
    //     if (verMais) {
    //         setVerMais(false);
    //         setFraseBotao('Ver mais');
    //     } else {
    //         setVerMais(true);
    //         setFraseBotao('Ver menos');
    //     }
    // };

    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <ProjetoCard
                    imagem={printMulheresConectadas}
                    titulo='MulheresConectadas'
                    descricao='Site criado para uma Digital Influencer. O site tem o intuito de organizar as inscrições para o evento que ela organiza. Fiz uma documentação do back-end apesar de não estar utilizando (ainda) o back nesta aplicação. Por enquanto os dados estão sendo enviados diretamente para o whatsapp.'
                    tecnologias={['ReactJS', 'NodeJS', 'TypeScript', 'MySQL']}
                    hospedagemLink='https://mulheresconectadas.netlify.app/'
                    githubLink='https://github.com/SrTesch/encontroDaNay'
                />
                <ProjetoCard
                    imagem={printRRank}
                    titulo='Regional Rank'
                    descricao='Este projeto foi pensado na comunidade de Cubo Mágico! Nós sentiamos que faltava um ranking mais específico por conta do Brasil ser tão grande. Então criamos um ranking de cada estado (em vez de cada país, apenas). Eu fiz apenas o front da aplicação'
                    tecnologias={['HTML', 'CSS', 'JavaScript', 'React.js']}
                    hospedagemLink='https://ranking-estadual-wca.leinadium.dev/'
                    githubLink='https://github.com/Leinadium/wca-states'
                />
                {/* <ProjetoCard
                    imagem={printAgencia}
                    titulo='Agencia de Branding'
                    descricao='O site da Agência de Branding oferece uma navegação fluida e intuitiva através do seu portfólio de trabalhos, permitindo aos usuários explorarem os diversos projetos de branding com facilidade e prazer.'
                    tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                    hospedagemLink='https://agencia-de-branding-lac.vercel.app'
                    githubLink='https://github.com/diogokimisima/Agencia-de-branding'
                /> */}


            </div>

            <div className='secao-projeto-ver-mais'>
                {/* {verMais && (
                    <div className='secao-card-projetos'>
                        <ProjetoCard
                            imagem={printLista}
                            titulo='Lista de Participantes'
                            descricao='O site projeto Lista de Participantes de Evento, uma aplicação front-end em ReactJS. Esta aplicação permite listar participantes de um evento, realizar buscas, navegar pelas páginas da lista e visualizar detalhes de cada participantes.'
                            tecnologias={['REACT.JS', 'TYPESCRIPT', 'TAILWIND']}
                            hospedagemLink='https://lista-participantes-evento.vercel.app'
                            githubLink='https://github.com/diogokimisima/Lista-participantes-evento'
                        />
                        <ProjetoCard
                            imagem={printCardapio}
                            titulo='Cardapio Restaurante'
                            descricao='O site de cardápio oferece uma experiência imersiva e intuitiva, com design moderno e responsivo, tornando a exploração do menu do cardapio mais agradável para os usuários e clientes.'
                            tecnologias={['HTML', 'CSS', 'JS', 'REACT.JS']}
                            hospedagemLink='https://cardapio-restaurante-ten.vercel.app'
                            githubLink='https://github.com/diogokimisima/Cardapio-Restaurante'
                        />

                    </div>
                )} */}
            </div>

            {/* <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div> */}
        </section>
    );
}
