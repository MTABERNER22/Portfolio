import { Card } from 'react-bootstrap';
import "../Estilos/Proyectos.css"

function Proyecto({ title, text, icons, src, id, links }) {
  return (
    <>
      <Card className='conteinerCards' id={id}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
          <div >
             <p><b>{title}</b> </p> 
          </div>
          <div style={{marginBottom: '0.5rem'}}>
            {text}
          </div>
          <div >
              <b>Tecnologías Utilizadas: </b>
          </div>
          <div className="iconsWrap">
              {icons}
          </div >
          <div className='iconosLinkProyecto'>
           {links}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Proyecto;