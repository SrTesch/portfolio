import './skills.css';
import SkillsCard from './skillsCard';

import logoFront from '../../img/logo-frontend1.png';
import logoBack from '../../img/logo-backend.png';
import logoFerramentas from '../../img/logo-ferramentas.png'

export default function Skills() {
    return (
        <section className='limitar-secao secao-skills'>
            <h4>Tecnologias</h4>
            <h2>Minhas Skills</h2>
            <div className='secao-card-skills'>
                <SkillsCard
                    imagem={logoFront}
                    descricao='Desenvolvimento Web'
                    tecnologias={['Javascript, TypeScript, ReactJS, BootStrap, NodeJS, RubyOnRails, MySQL, Docker']}
                />

                <SkillsCard
                    imagem={logoBack}
                    descricao='Institucional'
                    tecnologias={['C, Python, Java, Redes, Modelagem de Dados, Assembly, AEDS, POO']}
                />

                <SkillsCard
                    imagem={logoFerramentas}
                    descricao='Ferramentas/Plataformas'
                    tecnologias={['Git, GitHub, Arch Linux, AWS, Azure, SCRUM, Docker.']}
                />
            </div>
        </section >
    )
}