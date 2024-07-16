import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      duration: 2500,
      reset: true,
    });

  
    sr.reveal('.descricao-home h1', {distance: '40px', delay: 300, origin: 'left' });
    sr.reveal('.descricao-home span', {distance: '40px', delay: 300, origin: 'right' });
    sr.reveal('.descricao-home p', {distance: '30px', delay: 400, origin: 'right' });
    sr.reveal('.secao-link', {distance: '40px', delay: 400, origin: 'left' });
    sr.reveal('.secao-redes', {distance: '40px', delay: 500, origin: 'bottom' });
    sr.reveal('.banner-home', {distance: '40px', delay: 500, origin: 'right' });

    sr.reveal('.secao-sobre', {distance: '40px', delay: 270, origin: 'top' });
    sr.reveal('.sobre-descricao h4', {distance: '40px', delay: 280, origin: 'top' });
    sr.reveal('.sobre-descricao h2', {distance: '40px', delay: 290, origin: 'right' });
    sr.reveal('.sobre-descricao p', {distance: '40px', delay: 300, origin: 'left' });

    sr.reveal('.secao-skills h4', {distance: '40px', delay: 290, origin: 'top' });
    sr.reveal('.secao-skills h2', { delay: 290, origin: 'right' });
    sr.reveal('.card-skills', { delay: 320, origin: 'left' });

    sr.reveal('.secao-card-projetos', {distance: '40px', delay: 420, origin: 'left' });
    sr.reveal('.secao-contato', {distance: '40px', delay: 300, origin: 'top' });


  }, []);
};

export default ScrollRevealComponent;
