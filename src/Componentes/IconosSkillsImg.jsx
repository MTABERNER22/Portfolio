import "../Estilos/Skills.css"

function IconosSkillsImg({src, alt="", text="", style={}}){
    return(
        <div className="icono" style={style}>
            <img src={src} alt={alt} className="iconoSkillsImg"/>
            <p className="tittle" >{text}</p>
        </div>
    )

}

export default IconosSkillsImg;