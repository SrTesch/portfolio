import React from 'react'
import image from "./images/perfil.png"


export class Init extends React.Component{
    render(){
    return(
        <header class="App-header">
        <div id="container">
            <img src={image} alt='Imagem de Perfil' id="profilePhoto" />
            <h1>Pedro Tesch</h1>
            <p>Desenvolvedor Front-End</p>
            <nav>
                <ul>
                    <li><a href="#sobreMim">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )};
}

export class Sobre extends React.Component{
    render(){
        return(
            <section id="sobreMim">
            <div id="imgAbout">
                <img src='#' alt='#' />
            </div>
            <div id="textAbout">
                <h1>Olá! Meu nome é Pedro Tesch!</h1>
                <p>Tenho 22 anos e atualmente estou cursando Engenharia da Computação pelo CEFET-RJ. <br />Resolvi estudar front-end por conta própria para complementar meus conhecimentos de back obtidos na Faculdade e hoje virei um entusiasta do Desenvolvimento Web</p>
            </div>
            </section>
        )
    }
}

export class Tech extends React.Component{
    render(){
        return (
            <section id="tech">
                <div id="techSkills">
                    <h1>Tecnologias de meu interesse</h1>
                    <p>*Pode passar o mouse em cima do ícone para aparecer uma breve descrição sobre</p>
                </div>
                <div id='techImages'>
                    <img src='#' alt='#' id='oi'/>
                    <img src='#' alt='#' id='oi2'/>
                    <img src='#' alt='#' id='oi3'/>
                </div>
            </section>
        )
    }
}


export class Projects extends React.Component{
    render(){
        return(
            <div id='projects'>
                
            </div>
        )
    }
}




export class Footer extends React.Component{
    render(){
        return(
            <footer>Developed by <a href="https://github.com/srTesch" target="_blank" rel='noreferrer'>@Tesch</a></footer>
        )};
}