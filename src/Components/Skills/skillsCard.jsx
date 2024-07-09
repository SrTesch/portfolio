const SkillsCard = ({ imagem, descricao, tecnologias }) => {
    return (
        <article className='card-skills'>
            <div className='descricao-skills'>
                <img className='img-descricao' src={imagem} alt="icone-front"></img>
                <h3 className='titulo-descricao'>{descricao}</h3>
                {tecnologias.map(tecnologia => (
                    <p className='paragrafo-descricao' key={tecnologia}> {tecnologia} </p>
                ))}
            </div>
        </article>
    )
}

export default SkillsCard;