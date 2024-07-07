import "../Estilos/Menu.css";
import foto from "../img/LOGO6.png";
import { Button } from 'react-bootstrap';



function Menu() {

        const scrollToSection = (id) => {

            const element = document.getElementById(id);

            element.scrollIntoView({ behavior: "smooth" });

        };

    return (
        <div >
            <div className="menu" variant="dark">
                <div > 
                    <ul className="listaMenu">
                        <li  onClick={() => scrollToSection("presentacion")} ><img src={foto} alt="" className="img" /> </li>
                        <li onClick={() => scrollToSection("proyectos")} >Proyectos</li>
                        <li onClick={() => scrollToSection("sobreMi")} >Sobre mi</li>
                        <li onClick={() => scrollToSection("skills")} >Skills</li>
                        <li onClick={() => scrollToSection("educacion")} >Educación</li>
                        <li onClick={() => scrollToSection("input")}>Contacto</li>
                    </ul>
                </div>
            </div>
            <div className="descargaCv">
                <Button variant="dark" href="./MATIAS_TABERNER_CV_PROG.pdf" download style={{fontFamily : 'Quicksand, sans-serif'}}>Descargar CV</Button>
            </div>
        </div>
    )
}

export default Menu;
