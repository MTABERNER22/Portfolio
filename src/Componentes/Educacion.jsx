import Modal from "./ModalCursos";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import FundamentosProg from "../img/Cert_Fundm_Prog-page-001.jpg";
import DisGrfDig from "../img/Cert_Disñ_Graf_Dig-page-001.jpg";
import Analytics from "../img/Certificado-Data-Analytics-EducaciónIT-page-001.jpg";
import ProgWebIni from "../img/Cert_Prog_ini_Web-page-001.jpg";
import ProgWebFrntEnd from "../img/Cert_Prog_ini_FrontEnd-page-001.jpg";
import DiploJava from "../img/Cert_Diplo_Java-page-001.jpg";
import ProgWebAvnz from "../img/Cert_Prog_Web_Avanz-page-001.jpg";
import DesarrolloReact from "../img/Cert_React-page-001.jpg";
import ExrptJava from "../img/Cert_Exprt_Java-page-001.jpg";
import Angular from "../img/Cert_Angular-page-001.jpg";
import Node from "../img/Cert_Node_page-0001.jpg";
import FullStack from "../img/Cert_Prof_FullStack_page-0001.jpg"
import "../Estilos/Educacion.css"

function Educacion() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    const [show7, setShow7] = useState(false);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);

    const [show8, setShow8] = useState(false);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);

    const [show9, setShow9] = useState(false);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);

    const [show10, setShow10] = useState(false);
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);

    const [show11, setShow11] = useState(false);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);



    return (
        <>
            <div className="containerEducacion" id="educacion" >
                <p className="tituloEducacion">EDUCACIÓN</p>
                <br />
                <div>
                    <Modal
                        show={show11}
                        handleClose={handleClose11}
                        src={FullStack}
                        certificado="Professional Full-Stack Developer"
                        duracion="Noviembre 2022 - Junio 2023"
                        descripcion="En este curso aprendí a crear aplicaciones web utilizando Angular basándose en el patrón de diseño MVC aplicando las normas que ello requiere. Aplicar y adaptar los conocimientos en programación web al desarrollo de aplicaciones SPA explotando las ventajas brindadas por React js en cuanto al flujo de datos. Integrar ambas plataformas al backend a través de un api rest desarrollada con Node js "
                        horas="Curso de 195 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow11}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show}
                        handleClose={handleClose}
                        src={DesarrolloReact}
                        certificado="Desarrollo en React.js"
                        duracion="Noviembre 2022 - Marzo 2023"
                        descripcion="En este curso aprendí a utilizar el virtual DOM mediante los desarrollos de React JS Aplicar manejo de rutas utilizando Firebase y a adquirir conocimientos de programación por componentes mediante Javascript JS ES6.  "
                        horas="Curso de 105 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show9}
                        src={Angular}
                        handleClose={handleClose9}
                        certificado="Desarrollo en Angular.js"
                        duracion="Marzo 2023 - Abril 2023"
                        descripcion="En este curso aprendí a crear una aplicación en angular aplicando el sistema de routing, el uso de ajax, la validaciones de formularios, entre otros. Dentro de un sistema de Modelo Vista Controlador, más conocido como patrón MVC. "
                        horas="Curso de 45 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow9}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show10}
                        src={Node}
                        handleClose={handleClose10}
                        certificado="Desarrollo en Node.js"
                        duracion=" Abril 2023 - Mayo 2023"
                        descripcion="En este curso aprendí a crear una api-rest usando Node Express y MongoDB.  "
                        horas="Curso de 45 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow10}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show1}
                        handleClose={handleClose1}
                        src={ProgWebAvnz}
                        certificado="Programador Web Avanzado"
                        duracion="Agosto 2022 - Noviembre 2022"
                        descripcion="En este curso aprendí a ofrecer servicios avanzados, aplicando prestaciones de Node JS, realizando aplicaciones de actualización automática con AJAX; utilizando prestaciones del framework de Google Angular JS; programando en Javascript y Jquery mediante Frameworks (React.js); utilizando PHP mediante Frameworks; manejando PHP orientado a objetos.  "
                        horas="Curso de 105 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow1}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show2}
                        handleClose={handleClose2}
                        src={DiploJava}
                        certificado="Diplomatura en Java"
                        duracion="Agosto 2022 - Noviembre 2022"
                        descripcion="En este curso aprendí a crear aplicaciones en Java de dos y tres capas.Organizar y configurar la infraestructura para poder incorporar un proyecto desarrollado en Java. Aplicar patrones de diseño simples para crear clases reutilizables. Crear un servidor multiproceso. Implementar y comprobar un programa completo que podría utilizarse en una aplicación comercial de una intranet. Comprender los conceptos fundamentales de la programación en Java e implementarlos.  "
                        horas="Curso de 105 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow2}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show8}
                        handleClose={handleClose8}
                        src={ExrptJava}
                        certificado="Experto Universitario de Programación especializado en Java"
                        duracion="Marzo 2022 - Noviembre 2022"
                        descripcion=" Certificado de especialización en Java "
                        horas="Curso de 105 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow8}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show3}
                        handleClose={handleClose3}
                        src={ProgWebFrntEnd}
                        certificado="Programador Web Inicial Front End Developer"
                        duracion="Abril 2022 - Julio 2022"
                        descripcion="En este curso aprendí a crear aplicaciones básicas para sitios web, combinando lenguajes de programación como PHP, jquery y JavaScript (especialmente, su librería Node.js). Utilizando tambíen, boots y e incorporando MYSQL. Otras tenologías utilizadas: GIT, HTML, CSS, CRUD y Despliegue en HEROKU."
                        horas="Curso de 157 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow3}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show4}
                        handleClose={handleClose4}
                        src={ProgWebIni}
                        certificado="Programador Web Inicial"
                        duracion="Abril 2022 - Julio 2022"
                        descripcion="En este curso aprendí los conocimientos básicos para desempeñarse en el ámbito del diseño web. Utilizando lenguajes como PHP con bases de datos MySQL, maquetando sitios Web mediante HTML5 y las hojas de estilo CSS3."
                        horas="Curso de 97 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow4}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>

                    <Modal
                        show={show5}
                        handleClose={handleClose5}
                        src={FundamentosProg}
                        certificado="Fundamentos de la Programación"
                        duracion="Marzo 2022 - Junio 2022"
                        descripcion="En este curso aprendí las bases fundacionales para modelar en forma abstracta una realidad dentro de un contexto determinado, a través de la utilización de soluciones basadas en el pensamiento lógico y computacional, llamadas algoritmos."
                        horas="Curso de 90 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow5}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show6}
                        handleClose={handleClose6}
                        src={DisGrfDig}
                        certificado="Diseño Gráfico Digital "
                        duracion="Julio 2022 - Septiembre 2022"
                        descripcion="En este curso aprendí a realizar diseños vectoriales en Adobe Illustrator, y a desarrollar diseños en mapa de bits, retoques fotográficos y animaciones con Adobe Photoshop."
                        horas="Curso de 82 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow6}>Certificado</Button>
                </div>
                <br />
                <br />
                <div>
                    <Modal
                        show={show7}
                        handleClose={handleClose7}
                        src={Analytics}
                        certificado="Data Analytics "
                        duracion="Diciembre 2022 - Enero 2023"
                        descripcion="En este curos aprendí a cuantificar y transformar conjuntos de datos, definir y controlar indicadores de calidad, a generar Metadatos. Conceptos como SmartData (Analytics + Big Data), inteligencia de Negocios , Data Reduction. Trabajar con Datos Geográficos. Utiizar herramientas de datos: MySQL, PowerBI y QGIS."
                        horas="Curso de 24 horas"
                    />
                    <Button type="submit" variant="dark" size="sm" onClick={handleShow7}>Certificado</Button>
                </div> 
            </div>
        </>
    )
}

export default Educacion;
