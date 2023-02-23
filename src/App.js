import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <div id="container">
                    <h1>Pedro Tesch</h1>
                    <p>Front-End Developer</p>
                    <nav>
                        <ul>
                            <li><a href="#sobreMim">Sobre mim</a></li>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="sobreMim">
                <h1>Olá! Pode me chamar só de Tesch!</h1>
                <p>Tenho 22 anos e atualmente estou cursando Engenharia da Computação pelo CEFET-RJ. <br />Resolvi estudar front-end por conta própria para complementar meus conhecimentos de back obtidos na Faculdade e hoje virei um entusiasta do Desenvolvimento Web</p>
            </section>
            <footer>Developed by <a href="https://github.com/srTesch" target="_blank" rel='noreferrer'>@Tesch</a></footer>
        </div>
    );
}

export default App;
