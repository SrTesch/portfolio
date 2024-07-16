import './contato.css';
import { useState } from 'react';
import emailjs from 'emailjs-com'

export default function Contato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        const templateParams = {
            nome,
            email,
            message
        };

        emailjs.send('teste', 'template_portfolio',templateParams, '2_BzGdRwjWjz19N73').then((response) =>{
            console.log('Success!', response.status, response.text);
            alert('Mensagem enviada com sucesso!');
            setEmail('');
            setNome('');
            setMessage('');
        }, (error) =>{
            console.log('Failed...', error);
            alert("Falha ao enviar mensagem.")
        })
    }

    return (
        <section  className='limitar-secao secao-contato' id='contato'>
            <h4 className='subtitulo-contato'>Ficou interessado(a)?</h4>
            <h2 className='titulo-contato'>Entre em contato</h2>
            <div className='secao-form'>
                <form  onSubmit={handleSubmit} className='formulario'>
                    <input 
                        type="text"
                        placeholder="Nome"
                        name="name"
                        id='inp'
                        onChange={e=>{setNome(e.target.value)}}
                    ></input>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id='inp'
                        onChange={e=>{setEmail(e.target.value)}}
                        ></input>
                    <textarea
                        placeholder="Mensagem"
                        name="message"
                        rows={7}
                        id='inp'
                        onChange={e=>{setMessage(e.target.value)}}
                    ></textarea>
                    <button type="submit">ENVIAR</button>
                </form>
            </div >
        </section >
    )
}