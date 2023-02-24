import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import {Init , Sobre, Tech, Projects, Footer} from "./components.js"

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit} />
            <Init />
            <Sobre />
            <Tech />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;