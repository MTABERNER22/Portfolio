import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

function iconosLinkProyectos({hrefLink, hrefGit}){
    return(
       <  >
            <a href={hrefLink} ><FontAwesomeIcon icon={faLink} /></a>
            <a href={hrefGit} style={{ marginLeft: '1rem' }}><FontAwesomeIcon icon={faGithub} /> </a>
       </> 
    )
}

export default iconosLinkProyectos;