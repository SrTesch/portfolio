import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import {Init} from "./components.js"
import {Sobre} from "./components.js"
import {Tech} from "./components.js"

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <Init />
            <Sobre />
            <Tech />
            <footer>Developed by <a href="https://github.com/srTesch" target="_blank" rel='noreferrer'>@Tesch</a></footer>
        </div>
    );
}

export default App;