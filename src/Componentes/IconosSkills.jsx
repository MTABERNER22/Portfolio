import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Estilos/Skills.css"
 

function iconosSkills({titulo="", icon, style={}}){
    return(
       <div className='icono' style={style} >
            <FontAwesomeIcon icon={icon}/>
            <p className='tittle' >{titulo}</p>
       </div> 
    )
}

export default iconosSkills;