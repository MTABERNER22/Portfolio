import { faHtml5, faCss3Alt, faJs, faPhp, faReact, faAngular, faBootstrap, faJava, faNode } from '@fortawesome/free-brands-svg-icons';
import photoshop from "../img/photoshop.png";
import ilustrator from "../img/ilustrador.png";
import visualCode from "../img/visualCode.png";
import Iconos2 from './IconosSkillsImg';
import "../Estilos/Skills.css";
import Iconos from './IconosSkills';


function Skills(){
    return (
            <div className='containerSkills' id="skills" >
                <p className='tituloSkills'>SKILLS</p>
                <div>
                    <p className='titulosLenguajes'>Lenguajes de programación</p>
                    <div className='cajasIconosSkills'>
                        <Iconos titulo="HTML5" icon={faHtml5}  style={{backgroundColor: '  rgb(245, 102, 63)  ', marginLeft: '0'}} />
                        <Iconos titulo="Css3" icon={faCss3Alt}   style={{backgroundColor: ' rgb(82, 104, 165)'}}  />
                        <Iconos titulo="JavaScript" icon={faJs} style={{backgroundColor: 'gold'}}  />
                        <Iconos titulo="Php" icon={faPhp}  style={{backgroundColor: 'rgb(125, 112, 172)'}}  />
                        <Iconos titulo="Java" icon={faJava}  style={{backgroundColor: 'red'}} />
                    </div>
                </div>
                <div>
                    <p className='titulosLenguajes' >Librerias y Frameworks</p>
                    <div className='cajasIconosSkills'>
                        <Iconos titulo="React.js" icon={faReact}  style={{backgroundColor: 'gray', marginLeft : '0'}} />
                        <Iconos titulo="Angular.js" icon={faAngular} style={{backgroundColor: ' rgb(136, 14, 24)'}} />
                        <Iconos titulo="Node.js" icon={faNode}  style={{backgroundColor: 'green'}}  />
                        <Iconos titulo="Bootstrap" icon={faBootstrap} style={{backgroundColor: 'blueviolet'}}  />
                    </div>
                </div>
                <div>
                    <p className='titulosLenguajes' >Herramientas y Software</p>
                    <div className='cajasIconosSkills'>
                        <Iconos2 src={ilustrator} alt="" text="Adobe Illustrator" style={{backgroundColor: 'rgb(250, 152, 125)', marginLeft : '0'}} />
                        <Iconos2 src={photoshop} alt="" text="Adobe Photoshop" style={{backgroundColor: 'rgb(34, 108, 151)'}}  />
                        <Iconos2 src={visualCode} alt="" text="Visual Studio Code" style={{backgroundColor: 'rgb(34, 151, 126)'}} />
                    </div>
                </div>
            </div>
    )
}

export default Skills;