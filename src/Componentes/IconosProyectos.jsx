import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

function iconosProyectos({titulo="", icon, style={}, id}){
    return(
       <  >
       <div className='iconoProyecto' style={style} id={id}>
            <FontAwesomeIcon icon={icon}/>
            <p className='tituloIconoProyecto' >{titulo}</p>
            </div>
       </> 
    )
}

export default iconosProyectos;