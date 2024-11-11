import { useState } from 'react';
import React from 'react';
import ProjetoCard from './projetocard.jsx';
import './projeto.css';
import printWbSat from '../../img/wbsat.png'
import printRRank from '../../img/printRegionalRank.png'
import printMulheresConectadas from '../../img/mulheresconectadasPC.png'
import printTodoListinha from  "../../img/todolistinha.png"

export default function Projeto() {
    const [verMais, setVerMais] = useState(false);
    const [fraseBotao, setFraseBotao] = useState("Ver mais");

    const handleVerMaisClick = () => {
        if (verMais) {
            setVerMais(false);
            setFraseBotao('Ver mais');
        } else {
            setVerMais(true);
            setFraseBotao('Ver menos');
        }
    };
    
    return (
        <section id='projetos' className='limitar-secao secao-projetos'>
            <h2 className='subtitulo-projeto'>Meus projetos</h2>
            <div className='secao-card-projetos'>
                <ProjetoCard
                    imagem={printWbSat}
                    titulo='Empresa de Controle de Frotas'
                    descricao='O site da WBSAT (Empresa de rastreadores e controle de frotas) oferece uma navegação fluida e intuitiva, permitindo aos usuários explorarem os diversos serviços com facilidade e prazer.'
                    tecnologias={['HTML', 'CSS', 'TypeScript', 'REACT.JS']}
                    hospedagemLink='https://wbsat.com.br'
                    githubLink='https://github.com/SrTesch/wbSat'
                />
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


            </div>

            <div className='secao-projeto-ver-mais'>
                {verMais && (
                    <div className='secao-card-projetos'>
                        <ProjetoCard
                            imagem={printTodoListinha}
                            titulo='To-Do Listinha'
                            descricao='Uma simples e funcional To-Do List que utiliza LocalStorage para salvar os dados. Eu uso atualmente para diversos fins como: lista de mercado; Coisas para resolver na minha rotina diária; Etc.'
                            tecnologias={['HTML', 'CSS', 'JS']}
                            hospedagemLink='https://todolistinha.netlify.app'
                            githubLink='https://github.com/SrTesch/todoList'
                        />

                    </div>
                )}
            </div>

            <div className='secao-botao-ver'>
                <button className='botao-ver' onClick={handleVerMaisClick}>{fraseBotao}</button>
            </div>
        </section>
    );
}
