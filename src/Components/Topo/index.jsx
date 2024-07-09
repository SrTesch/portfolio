import {useState} from "react";

import './topo.css';

export default function Topo() {
    const [ativar, setAtivar] = useState("nav-list");
        const navList = () => {
            ativar === 'nav-list' ? setAtivar('nav-list nav-active') : setAtivar("nav-list");
        }
    return (
        <header className='header'>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <a className='link-nome' href='#home'><h1>Tesch<span>.dev</span></h1></a>
                </div>
                <nav>
                    <div className="mobile-menu" onClick={navList}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                    </div>
                    
                    <div className={ativar}>
                        <a href='#home' className='link-topo link-home' to="/" >Home</a>
                        <a href='#sobre' className='link-topo' to="/Sobre">Sobre</a>
                        <a href='#skills' className='link-topo' to="/Skills">Skills</a>
                        <a href='#projetos' className='link-topo' to="/Projetos">Projetos</a>
                        {/* <a href='#contato' className='link-topo' to="/Projetos">Contato</a> */}
                    </div>
                </nav>
            </div>
        </header>
    )
}