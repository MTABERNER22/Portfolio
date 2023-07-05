import React from "react";
import { Modal } from "react-bootstrap";
import "../Estilos/Educacion.css"


function ModalCursos({ show, handleClose, src, certificado, duracion, horas, descripcion }) {
    
    return (
        <div style={{ fontFamily: 'PlayfairDisplay, serif' }}>
            <div className="containerModal" > 
                <div className="cajaDescripcion">
                <p className="certificado">{certificado}</p>
                <p className="horas">{horas}</p>
                <p className="descripcion" >{descripcion}</p>
                </div>
                <div className="cajaDuracion">
                <p>{duracion}</p>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Certificado de Aprobación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={src} alt="" width="100%" height="100%" />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalCursos;