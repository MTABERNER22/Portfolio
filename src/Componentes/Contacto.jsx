import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faYahoo, faLinkedinIn, faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import "../Estilos/Contacto.css"
import Iconos from "./IconosSkills"

function Contacto() {
    return (
        <div className="containerContacto" >
            <div >
                <h2><b>TAMBIÉN ME PODES ENCONTRAR</b></h2>
                <br />
                <div className="contenedorIconContacto">
                    <FontAwesomeIcon icon={faWhatsapp} shake className='iconContacto' />
                    <p >WHATSAPP</p>
                    <a href=" https://wa.me/ ">+54 11 58059071</a>
                </div>
                <br />
                <div  className="contenedorIconContacto">
                    <FontAwesomeIcon icon={faYahoo} className='iconContacto' spin />
                    <p >ENVÍAME UN MAIL</p>
                    <a href="https://yahoo.com.ar" >matiasetaberner16@yahoo.com</a>
                </div>
                <br />
                <div  className="contenedorIconContacto" >
                    <FontAwesomeIcon icon={faLinkedinIn} beat className='iconContacto' />
                    <p >Linkedin</p>
                    <a href="http://www.linkedin.com/in/matiasezequieltaberner" >www.linkedin.com/in/matiasezequieltaberner</a>
                </div>
            </div>
            <br />
            <div>
                <h4>ESTE SITIO FUE DESARROLADO CON</h4>
                <br />
                <div className='conteinerAgradecimiento' >
                        <Iconos titulo="HTML5" icon={faHtml5}  style={{backgroundColor: '  rgb(245, 102, 63)  ', marginLeft : '0'}} />
                        <Iconos titulo="Css3" icon={faCss3Alt}   style={{backgroundColor: ' rgb(82, 104, 165)'}}  />
                        <Iconos titulo="JavaScript" icon={faJs} style={{backgroundColor: 'gold'}}  />
                        <Iconos titulo="React.js" icon={faReact}  style={{backgroundColor: 'gray'}} />
                        <Iconos titulo="Bootstrap" icon={faBootstrap} style={{backgroundColor: 'blueviolet'}}  />
                </div>
            </div>
        </div>
    )
}

export default Contacto;