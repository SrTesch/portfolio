import './App.css';

import Topo from "./Components/Topo";
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Skills from './Components/Skills';
import Rodape from './Components/Rodape';
import Projeto from './Components/Projetos';
import ScrollRevealComponent from './Components/ScrollReveal/scrollReveal';
import { ScrollToTopButton } from './Components/VoltarTopo';
import Contato from './Components/Contato';

function App() {
  return (
    <div className="App">
      <Topo/>
      <ScrollRevealComponent/>
      <Home/>
      <Sobre />
      <Skills/>
      <Projeto />
      <Contato />
      <ScrollToTopButton  />
      <Rodape />
    </div>
  );
}

export default App;
