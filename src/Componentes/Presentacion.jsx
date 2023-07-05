import foto from "../img/yo.png";
import "../Estilos/Presentacion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Presentacion() {

    return (
        <section className="conteiner" id="presentacion" >
            <div  className="fotoContainer" >
                <img src={foto} alt="" className="foto" />
            </div>
            <div className=" text" >
                <div className="text1"><p>Matias Taberner</p></div>
                <div className="text2"> <p>Desarrollador full-Stack</p></div>
                <div className="botonesRedes">
                    <a href="http://www.linkedin.com/in/matiasezequieltaberner"  className="iconLink" ><FontAwesomeIcon icon={faLinkedinIn}  bounce /></a>
                    <a href="https://github.com/MTABERNER22?tab=repositories" className="iconGit"><FontAwesomeIcon icon={faGithub} bounce /> </a>
                </div>
            </div>
        </section>
    )
}

export default Presentacion;